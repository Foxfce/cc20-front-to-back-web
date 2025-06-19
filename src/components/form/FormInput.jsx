function FormInput({ name, type=null, register}) {

  return (
    <input
      type={type}
      className="border w-full rounded-md border-gray-400 p-1 px-4"
      placeholder={name}
      {...register(name)}
    />
  )
}
export default FormInput