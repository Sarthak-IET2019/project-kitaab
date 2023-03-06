import TopicCard from "../TopicCard";

const TopicListing = ({ topicList }) => {
  return (
    <div className="relative w-full max-w-6xl flex gap-y-8 gap-x-8 flex-col h-max justify-center">
      {topicList?.map((topicItem) => {
        if (topicItem?.status)
          return <TopicCard topicItem={topicItem} key={topicItem?.id} />;
        else return;
      })}
    </div>
  );
};

export default TopicListing;
