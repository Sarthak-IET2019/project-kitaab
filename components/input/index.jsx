const Input = ({ name, placeholder, register, id, error }) => {
  return <input id={id} {...register(name)} placeholder={placeholder} />;
};

export default Input;
