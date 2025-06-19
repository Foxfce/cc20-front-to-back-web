function FormInput({ name, type = "text", register, errors }) {
  // let isShow = false;
  // const checkErrorOnBlur = (e) =>{
  //   e.stopPropagation();
  //   isShow = true;
  // }

  return (
    <div className="relative">
      <input
        type={type}
        className="border w-full rounded-md border-gray-400 p-1 px-4"
        placeholder={name}
        {...register(name)}
        // onBlur={checkErrorOnBlur}
      />
      <p className="absolute b-0 text-red-600">
        {
          errors[name] && <p>{errors[name].message}</p>
        }
      </p>
    </div>
  )
}
export default FormInput