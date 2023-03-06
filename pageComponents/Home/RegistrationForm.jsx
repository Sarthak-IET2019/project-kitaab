import Input from "@/components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schemas/auth";
import { FiUserPlus } from "react-icons/fi";
import { AuthServices } from "@/services/auth.service";
import { CODES } from "@/globals/globals";
import { useRouter } from "next/router";

const RegistrationForm = ({ setSlideFormX }) => {
  const router = useRouter();

  // Setting up react hook form
  const {
    register: register_signup,
    handleSubmit: handleSubmit_signup,
    formState: { errors: errors_signup },
  } = useForm({ resolver: yupResolver(signupSchema), mode: "onSubmit" });

  // Handle Signup
  async function handleSignUp(data) {
    let responseCode = await AuthServices.HandleUserSignUp(
      data.email,
      data.password
    );
    console.log(responseCode);
    if (responseCode === CODES.SUCCESS) {
      router.push("/topics");
    } else {
      alert("Already registered this email address. Try a different one!");
    }
  }
  return (
    <div className="relative w-full">
      <h5>Heyyyy!</h5>
      <h3 className="pb-4 text-[40px] text-text font-semibold">Join Maadi</h3>
      <form
        onSubmit={handleSubmit_signup(handleSignUp)}
        className="flex flex-col gap-y-4"
      >
        <Input
          type={"name"}
          id={"name"}
          name={"name"}
          placeholder={"Your full name"}
          register={register_signup}
          error={errors_signup?.name?.message}
        />
        <Input
          id={"email"}
          name={"email"}
          placeholder={"Your email"}
          register={register_signup}
          error={errors_signup?.email?.message}
        />
        <Input
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"Your password"}
          register={register_signup}
          error={errors_signup?.password?.message}
        />

        <button className="bg-hoverBg overflow-hidden rounded-[50px] text-white w-[200px] h-[48px] hover:bg-text flex justify-center items-center gap-x-2">
          Register <FiUserPlus />
        </button>
      </form>
      <h5 className="mt-5">
        Already signed up?
        <span
          className="text-blueLink"
          role={"button"}
          onClick={() => {
            setSlideFormX("0px");
          }}
        >
          {" "}
          Login now.
        </span>
      </h5>
    </div>
  );
};

export default RegistrationForm;
