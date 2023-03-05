import TopicListing from "@/pageComponents/Topics/TopicListing";
import { FetchTopicsFromStore } from "@/services/content.service";
import { useState } from "react";
import { useEffect } from "react";

const Topics = () => {
  const [topics, setTopics] = useState(null);
  useEffect(() => {
    FetchTopicsFromStore().then((data) => {
      setTopics(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-blue to-purple flex items-center py-8 flex-col gap-y-6 select-none">
      <h2 className="gradient-text w-full text-center text-[40px] py-4 font-bold uppercase tracking-widest">
        Chapters
      </h2>
      <TopicListing topicList={topics} />
    </div>
  );
};

export default Topics;
