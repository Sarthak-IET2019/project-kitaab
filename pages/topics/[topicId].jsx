import { useRouter } from "next/router";

const TopicId = () => {
  const router = useRouter();
  console.log(router.query.topicId);
  return <div className="w-full bg-gradient-to-r from-blue to-purple"></div>;
};

export default TopicId;
