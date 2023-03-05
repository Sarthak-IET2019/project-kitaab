import { useRouter } from "next/router";

const TopicCard = ({ topicItem }) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col bg-white rounded pt-10 py-4 px-4 transition-all min-w-[150px] min-h-[150px] max-w-max justify-center items-center relative overflow-hidden animate-dropin hover:scale-110"
      onClick={() => {
        router.push(`topics/${topicItem?.id}`);
      }}
      role={"button"}
      style={{ animationDelay: `${topicItem?.day * 100}ms` }}
    >
      <div className="text-text whitespace-nowrap flex flex-col text-[100px] font-bold peer justify-center items-center leading-none w-full">
        <span> {topicItem?.day ?? "0"}</span>
        <span className="text-xl text-center tracking-widest font-normal">
          DAY
        </span>
      </div>
      <div className="absolute top-0 flex w-full whitespace-nowrap h-[40px] bg-[#e63946] justify-around">
        <div className="h-1/2 w-[8px] rounded-b-full bg-white "></div>
        <div className="h-1/2 w-[8px] rounded-b-full bg-white "></div>
        <div className="h-1/2 w-[8px] rounded-b-full bg-white "></div>
      </div>
      {/* {topicItem?.id}
      {topicItem?.title}
      {topicItem?.author}
      {topicItem?.day}
      {topicItem?.description}
      {topicItem?.status} */}
    </div>
  );
};

export default TopicCard;
