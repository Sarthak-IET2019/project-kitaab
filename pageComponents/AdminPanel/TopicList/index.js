import Link from "next/link";
import TopicRow from "../TopicRow";
import { FaRegStickyNote } from "react-icons/fa";
import { useState } from "react";
import UpdateTopic from "../UpdateModal";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "@/components/loader";
import { AuthServices } from "@/services/auth.service";
import { FetchTopicsFromStore } from "@/services/content.service";
const TopicListing = () => {
  const [updateModalToggle, setUpdateModalToggle] = useState(false);
  const [updateDocData, setupdateDocData] = useState(null);
  const [topicList, setTopics] = useState(null);
  const router = useRouter("");

  // Fetch topics from store
  useEffect(() => {
    if (!updateModalToggle) {
      setTopics(null);
      FetchTopicsFromStore()
        .then((data) => {
          setTopics(data);
        })
        .catch((error) => {
          alert("You are not allowed to view this page. Please sign in");
          AuthServices.HandleUserLogout();
          router.push("/");
        });
    }
  }, [updateModalToggle]);
  return (
    <>
      {!topicList && <Loader />}
      {topicList && (
        <div className="relative w-full max-w-7xl flex gap-y-2 gap-x-8 flex-col h-max justify-center shadow-shadow rounded p-8">
          {updateModalToggle && (
            <div className="fixed top-0 left-0 w-screen bg-[rgba(255,255,255,0.9)] h-screen z-40 flex justify-center items-center">
              <UpdateTopic
                data={updateDocData}
                setUpdateModalToggle={setUpdateModalToggle}
              />
            </div>
          )}
          <Link href={"/add-topic"}>
            <button className="bg-accent rounded-[50px] text-white w-[200px] h-[48px] hover:bg-hoverBg flex justify-center items-center gap-x-2 mb-4">
              Create New Topic <FaRegStickyNote />
            </button>
          </Link>
          <div className="w-full relative flex whitespace-nowrap py-1 px-2 overflow-hidden border border-[#ebebeb]">
            <div className="w-[100px] items-center flex justify-start font-semibold text-xl py-2">
              Day
            </div>
            <div className="w-1/6 items-center flex justify-start flex-grow-[2] font-semibold text-xl py-2">
              Title
            </div>
            <div className="w-1/6 items-center flex justify-start flex-grow font-semibold text-xl py-2">
              Mentor
            </div>
            <div className="w-1/6 items-center flex justify-start flex-grow font-semibold text-xl py-2">
              Status
            </div>
            <div className="w-1/6 items-center flex justify-start flex-grow font-semibold text-xl py-2">
              Problem set
            </div>
            <div className="w-1/6 items-center flex justify-start font-semibold text-xl py-2">
              Actions
            </div>
          </div>
          {topicList?.map((topicItem) => {
            return (
              <TopicRow
                data={topicItem}
                key={topicItem?.id}
                setupdateDocData={setupdateDocData}
                setUpdateModalToggle={setUpdateModalToggle}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default TopicListing;
