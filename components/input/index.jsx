const Input = ({ name, placeholder, register, id, type = "text", error }) => {
  return (
    <input
      id={id}
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className={`relative rounded-[4px] border-2 bg-transparent text-text  w-full outline-none py-2 px-2 font-poppins ${
        error ? "border-[#FF0000]" : "border-[#e3e1e1]"
      }`}
    />
  );
};

export default Input;
