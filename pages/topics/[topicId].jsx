import { FetchTopicsFromStore } from "@/services/content.service.js";
import { useRouter } from "next/router";
import { useEffect } from "react";

const TopicId = () => {
  const router = useRouter();
  useEffect(() => {
    const data = FetchTopicsFromStore().then((data) => {
      console.log(data);
    });


  }, [])
  console.log(router.query.topicId);
  return <div className="w-full bg-gradient-to-r from-blue to-purple">

  </div>;
};

export default TopicId;
