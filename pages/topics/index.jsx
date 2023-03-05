import TopicListing from "@/pageComponents/Topics/TopicListing";
import { FetchTopicsFromStore } from "@/services/content.service";
import { useState } from "react";
import { useEffect } from "react";
import { IoPencil } from "react-icons/io5";

const Topics = () => {
  const [topics, setTopics] = useState(null);
  useEffect(() => {
    FetchTopicsFromStore().then((data) => {
      setTopics(data);
    });
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-blue to-purple flex items-center py-8 flex-col gap-y-6 select-none">
      <div className="flex text-white items-end relative">
        <h2 className="border-b-4 animate-width text-white w-full text-center text-[40px] font-bold uppercase tracking-wide border-white max-w-max py-4 whitespace-nowrap">
          || विषय सूचि ||
        </h2>
        <div className="animate-rotate relative">
          <IoPencil size={"60px"} />
        </div>
      </div>
      <div className="flex py-4">
        <TopicListing topicList={topics} />
      </div>
    </div>
  );
};

export default Topics;
