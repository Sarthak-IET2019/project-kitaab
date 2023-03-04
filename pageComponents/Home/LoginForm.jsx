import Input from "@/components/input";
import { useForm } from "react-hook-form";
import { BiLogInCircle } from "react-icons/bi";
import { loginSchema } from "@/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = ({ setSlideFormX }) => {
  // Setting up react hook form
  const {
    register: register_login,
    handleSubmit: handleSubmit_login,
    formState: { errors: errors_login },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onSubmit" });

  // Handle Login
  async function handleLogin(data) {
    console.log(data);
  }
  return (
    <div className="relative w-full">
      <h5>Welcome back,</h5>
      <h3 className="pb-4 text-[40px] text-text font-semibold">SignIn</h3>
      <form
        onSubmit={handleSubmit_login(handleLogin)}
        className="flex flex-col gap-y-4"
      >
        <Input
          id={"email"}
          name={"email"}
          placeholder={"Your email"}
          register={register_login}
          error={errors_login?.email?.message}
        />
        <Input
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"Your password"}
          register={register_login}
          error={errors_login?.password?.message}
        />
        <button className="bg-hoverBg rounded-[50px] text-white w-[200px] h-[48px] hover:bg-text flex justify-center items-center gap-x-2">
          Sign in <BiLogInCircle />
        </button>
      </form>
      <h5 className="mt-5">
        New user?
        <span
          className="text-blueLink"
          role={"button"}
          onClick={() => {
            setSlideFormX("calc(-100% - 40px)");
          }}
        >
          {" "}
          Register here.
        </span>
      </h5>
    </div>
  );
};

export default LoginForm;
