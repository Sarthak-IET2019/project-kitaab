import Input from "@/components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CODES } from "@/globals/globals";
import { useRouter } from "next/router";
import { topicSchema } from "@/schemas/topic.schema";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { UpdateTopicDetailsInStore } from "@/services/content.service";
const UpdateTopic = ({ data, setUpdateModalToggle }) => {
  const router = useRouter();
  console.log(data);
  // Setting up react hook form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data?.title,
      day: data?.day,
      author_name: data?.author?.name,
      author_email: data?.author?.email,
      video: data?.videoId,
      psp_url: data?.psp_url,
      description: data?.description,
      notes_url: data?.notes_url,
      status: data?.status,
    },
    resolver: yupResolver(topicSchema),
    mode: "onSubmit",
  });

  //   Handle Update topic
  const handleUpdateTopic = async (formData) => {
    const payload = {
      title: formData.title,
      day: formData.day,
      likes: 0,
      comments: 0,
      author: {
        name: formData.author_name,
        email: formData.author_email,
        avatar_url: "/avatar.png",
      },
      notes_url: formData.notes_url,
      psp_url: formData.psp_url,
      videoId: formData.video,
      description: formData.description,
      status: formData.status === "true" ? true : false,
    };

    let responseCode = await UpdateTopicDetailsInStore(data.id, payload);
    // handle error
    if (responseCode === CODES.SUCCESS) {
      alert("Document updated successfully");
      setUpdateModalToggle(false);
      reset();
    } else {
      alert(
        "Couldn't update the document. Internal error. Please contact administrator"
      );
    }
    console.log(payload);
  };
  return (
    <div className="relative w-full flex justify-center items-center h-full">
      <button
        onClick={() => setUpdateModalToggle(false)}
        className="absolute top-1 right-1 text-white p-4 bg-blueLink rounded"
      >
        <MdOutlineClose size={"24px"} />
      </button>
      <form
        onSubmit={handleSubmit(handleUpdateTopic)}
        className="flex flex-col gap-y-4 w-full max-w-[600px] p-6 shadow-shadow rounded bg-white"
      >
        <div className="relative ">
          <h3 className=" text-[40px] text-text font-semibold">Edit Topic</h3>
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
        <Input
          type={"text"}
          id={"psp_url"}
          name={"psp_url"}
          placeholder={"PSP Link"}
          register={register}
          error={errors?.psp_url?.message}
        />
        <Input
          type={"text"}
          id={"notes_url"}
          name={"notes_url"}
          placeholder={"notes Link"}
          register={register}
          error={errors?.notes_url?.message}
        />
        <select
          {...register("status")}
          className={`relative rounded-[4px] border-2 bg-transparent text-text  w-full outline-none py-2 px-2 font-poppins border-[#e3e1e1]
        `}
        >
          <option value={true}>Open</option>
          <option value={false}>Close</option>
        </select>
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
          Update Topic <FiUserPlus />
        </button>
      </form>
    </div>
  );
};

export default UpdateTopic;
