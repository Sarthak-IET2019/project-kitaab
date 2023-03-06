import { HiCalendarDays } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FaComments } from "react-icons/fa";
import { GetDate } from "@/globals/globals";
const MetaData = ({ data }) => {
  return (
    <div className="flex gap-x-6 items-end justify-between mt-2">
      <div className="flex gap-x-2 items-end">
        <HiCalendarDays size={"24px"} />
        <h3 className="font-medium text-xl leading-none ">Day : {data?.day}</h3>
      </div>
      <div className="flex gap-x-2 items-end">
        <IoMdTime size={"24px"} />
        <h3 className="font-medium text-xl leading-none ">
          {GetDate("2023-03-06T08:52:34+05:00")}
        </h3>
      </div>
      <div
        className="flex gap-x-2 items-end"
        role={"button"}
        onClick={() => {
          setData({ ...data, likes: data.likes + 1 });
        }}
      >
        <FcLike size={"24px"} />
        <h3 className="font-medium text-xl leading-none ">
          Likes : {data?.likes ?? "0"}
        </h3>
      </div>
      <div className="flex gap-x-2 items-end">
        <FaComments size={"24px"} />
        <h3 className="font-medium text-xl leading-none ">
          Comments : {data?.comments ?? "0"}
        </h3>
      </div>
    </div>
  );
};

export default MetaData;
