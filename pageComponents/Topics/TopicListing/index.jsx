import TopicCard from "../TopicCard";

const TopicListing = ({ topicList }) => {
  return (
    <div className="relative w-full max-w-6xl flex gap-y-8 gap-x-8 flex-wrap h-max justify-center">
      {topicList?.map((topicItem) => (
        <TopicCard topicItem={topicItem} key={topicItem?.id} />
      ))}
    </div>
  );
};

export default TopicListing;
