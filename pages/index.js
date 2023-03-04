import Input from "@/components/input";
import { useForm } from "react-hook-form";
import { BiLogInCircle } from "react-icons/bi";
import { loginSchema } from "@/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onChange" });

  // Handle Login
  async function handleLogin(data) {
    console.log(data);
  }
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full bg-gradient-to-r from-[#56D8E4] to-[#9F01EA] flex justify-center items-center">
        <div className="w-full max-w-max py-8 px-8 bg-white overflow-hidden flex justify-center flex-col rounded-md">
          <div className="relative w-full slide-right">
            <h5>Welcome back,</h5>
            <h3 className="pb-4 text-[40px] text-text font-semibold">
              Login to your account
            </h3>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex flex-col gap-y-4"
            >
              <Input
                type={"email"}
                id={"email"}
                name={"email"}
                placeholder={"Your email"} onChange={(event) => { setRegisterEmail(event.target.value); }}
                register={register}
                error={errors?.email?.message}
              />
              <Input
                type={"password"}
                id={"password"}
                name={"password"}
                placeholder={"Your password"}
                register={register}
                error={errors?.password?.message}
              />
              {/* <Input
              id={"email"}
              name={"email"}
              placeholder={"Your email"}
              register={() => {}}
            /> */}
              <button onClick={login
              } className="bg-hoverBg rounded-lg text-white w-[200px] h-[48px] hover:bg-text flex justify-center items-center gap-x-2">
                Sign In <BiLogInCircle />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
