import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import axios, { Axios } from 'axios';
import Buttons from "../../components/form/Buttons";

// rfce
function Register() {
  // JS
  const {
    register,
    handleSubmit,
    formState
  } = useForm();

  const {
    isSubmitting
  } = formState;

  const hdlSubmit = async (value) => {
    await new Promise((resolve)=>setTimeout(resolve, 3000));
    // console.log(value);
    // createAlert("success", "Registerd Success", 2000);
    try {
      const res= await axios.post('http://localhost:8000/auth/register',value);
      console.log(res);
      
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
      <div className="border w-64 h-fit p-4 m-4 rounded-md">
        <h1 className="font-bold text-center">Register</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)} >
          <div className="flex flex-col gap-4 m-5">
            <FormInput register={register} name="email" type="email" />
            <FormInput register={register} name="name" />
            <FormInput register={register} name="password" type="password" />
            <FormInput register={register} name="confirmPassword" type="password" />
          </div>
          <div className="m-5">
            <Buttons isSubmitting={isSubmitting} label={"Register"} />
          </div>
        </form>


      </div>

    </div>
  )
}

export default Register