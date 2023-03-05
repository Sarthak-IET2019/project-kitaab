import { FetchTopicDetailsFromStore } from "@/services/content.service";
import { useRouter } from "next/router";
import { useEffect } from "react";
const TopicId = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router?.query?.topicId);
    FetchTopicDetailsFromStore(router?.query?.topicId);
  }, [router?.query?.topicId]);
  console.log();
  return <div className="w-full bg-gradient-to-r from-blue to-purple"></div>;
};

export default TopicId;
