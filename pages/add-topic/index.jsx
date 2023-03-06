import Input from "@/components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CODES } from "@/globals/globals";
import { useRouter } from "next/router";
import { topicSchema } from "@/schemas/topic.schema";
import { FiUserPlus } from "react-icons/fi";
import { AddDocumentToStore } from "@/services/content.service";
const AddTopic = () => {
  const router = useRouter();

  // Setting up react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(topicSchema), mode: "onSubmit" });

  //   Handle Add topic
  const handleAddTopic = async (data) => {
    const payload = {
      title: data.title,
      day: data.day,
      likes: 0,
      comments: 0,
      author: {
        name: data.author_name,
        email: data.author_email,
        avatar_url: "/avatar.png",
      },
      notes_url: "",
      psp_url: "/",
      videoId: data.video,
      description: data.description,
      status: false,
    };

    // Adding to the store
    let responseCode = await AddDocumentToStore(payload);

    // handle error
    if (responseCode === CODES.SUCCESS) {
      alert("Document added successfully");
    } else {
      alert(
        "Couldn't add document. Internal error. Please contact administrator"
      );
    }
    console.log(payload);
  };
  return (
    <div className="relative w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleAddTopic)}
        className="flex flex-col gap-y-4 w-full max-w-[600px] p-6 shadow-shadow rounded"
      >
        <div className="relative ">
          <h5>Welcome back,</h5>
          <h3 className=" text-[40px] text-text font-semibold">New Topic</h3>
        </div>
        <Input
          type={"text"}
          id={"title"}
          name={"title"}
          placeholder={"Topic title"}
          register={register}
          error={errors?.title?.message}
        />
        <Input
          type={"number"}
          id={"day"}
          name={"day"}
          placeholder={"Topic day"}
          register={register}
          error={errors?.day?.message}
        />
        <Input
          type={"text"}
          id={"author_name"}
          name={"author_name"}
          placeholder={"Author Name"}
          register={register}
          error={errors?.author_name?.message}
        />
        <Input
          id={"email"}
          name={"author_email"}
          placeholder={"Author Email"}
          register={register}
          error={errors?.author_email?.message}
        />
        <Input
          type={"text"}
          id={"video"}
          name={"video"}
          placeholder={"Video Id"}
          register={register}
          error={errors?.video?.message}
        />
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          placeholder={"Topic Description"}
          {...register("description")}
          className={`relative rounded-[4px] border-2 bg-transparent text-text  w-full outline-none py-2 px-2 font-poppins ${
            errors?.description?.message
              ? "border-[#FF0000]"
              : "border-[#e3e1e1]"
          }`}
        />
        <button className="bg-accent overflow-hidden rounded-[50px] text-white w-[200px] h-[48px] hover:bg-hoverBg flex justify-center items-center gap-x-2">
          Add Topic <FiUserPlus />
        </button>
      </form>
    </div>
  );
};

export default AddTopic;
