import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import Buttons from "../../components/form/Buttons";

import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../../utils/validator";
import { actionLogin} from "../../api/auth";

// rfce
function Login() {
  // JS
  const {
    register,
    handleSubmit,
    formState
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {
    isSubmitting,
    errors
  } = formState;
  // console.log(errors);

  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log(value);
    // createAlert("success", "Registerd Success", 2000);
    try {
      const res = await actionLogin(value);
      console.log(res);
      createAlert("success", "Login Success", 2000);

    } catch (error) {
      console.log('error : ', error)
      createAlert("info", error.response?.data?.message);
    }
  }

  return (
    <div
      className="flex w-full h-full justify-end"
    >

      {/* Card */}
      <div className="border w-80 h-fit p-4 m-4 rounded-md">
        <h1 className="font-bold text-center">Login</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)} >
          <div className="flex flex-col gap-8 m-5">
            <FormInput register={register} name="email" type="email" errors={errors} />
            <FormInput register={register} name="password" type="password" errors={errors} />
          </div>
          <div className="mt-8 mx-5">
            <Buttons isSubmitting={isSubmitting} label={"Login"} />
          </div>
        </form>


      </div>

    </div>
  )
}

export default Login