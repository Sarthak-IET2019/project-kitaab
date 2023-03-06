import Divider from "@/components/divider";
import { FetchTopicDetailsFromStore } from "@/services/content.service";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { BiCodeAlt } from "react-icons/bi";
import Link from "next/link";
import AuthorBox from "@/pageComponents/TopicId/AuthorBox";
import VideoBox from "@/pageComponents/TopicId/VideoBox";
import SummaryBox from "@/pageComponents/TopicId/SummaryBox";
import MetaData from "@/pageComponents/TopicId/TopicMetaData";
import FaqBox from "@/pageComponents/TopicId/FaqModal";
import Loader from "@/components/loader";

const TopicId = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [localLikes, setLocalLikes] = useState(data?.likes);
  // {
  //   title: "Arrays",
  //   day: 1,
  //   likes: 10,
  //   comments: 4,
  //   author: {
  //     name: "Vishal Katiyar",
  //     email: "vishal@nowornever.com",
  //     avatar_url: "/avatar.png",
  //   },
  //   notes_url: null,
  //   psp_url: "/",
  //   videoId: "-yDH2wrKMPc",
  //   description:
  //     "An array is a collection of similar data elements stored at contiguous memory locations. It is the simplest data structure where each data element can be accessed directly by only using its index number. For instance, if we want to store the marks scored by a student in 5 subjects, then there’s no need to define individual variables for each subject. Rather, we can define an array that will store the data elements at contiguous memory locations.",
  // }
  useEffect(() => {
    console.log(router?.query?.topicId);
    FetchTopicDetailsFromStore(router?.query?.topicId).then((data) => {
      setData(data);
      setLocalLikes(data?.likes);
    });
  }, [router?.query?.topicId]);

  // dummy data

  return (
    <>
      {!data && <Loader />}
      {data && (
        <div className="relative w-full bg-white flex py-4">
          <div className="relative w-[min(1280px,calc(100%-4rem))] mx-auto rounded-[4px] gap-x-8 flex flex-wrap  py-4">
            <div className="flex flex-grow bg-white h-full w-[calc(70%-1rem)] whitespace-nowrap min-w-max px-4 py-4 rounded-[4px] flex-col mostly-customized-scrollbar shadow-shadow">
              <h2 className="text-[40px] font-semibold uppercase text-text">
                {data?.title}
              </h2>
              <MetaData data={data} localLikes={localLikes} setData={setData} />
              <Divider />
              <VideoBox
                data={data}
                setData={setData}
                setLocalLikes={setLocalLikes}
                localLikes={localLikes}
              />
              <SummaryBox summary={data?.description} />
              <FaqBox data={data} />
            </div>
            <div className="sticky top-16 h-max flex flex-grow w-[calc(30%-1rem)] whitespace-nowrap min-w-max flex-col  gap-y-6">
              <AuthorBox data={data} />
              <div className="relative bg-white px-4 py-4 rounded-[4px]  shadow-shadow">
                <fieldset className="flex flex-col w-full p-4 rounded  h-max">
                  <legend>
                    <h2 className="text-2xl font-semibold px-2">
                      What&apos;s next
                    </h2>
                  </legend>
                  <div className="flex flex-col gap-y-2">
                    <a href={data?.notes_url} download>
                      <button
                        className={`w-full max-w-[200px] h-[48px] rounded-full text-white flex justify-center items-center gap-x-2 ${
                          data?.notes_url
                            ? "bg-text hover:bg-hoverBg cursor-pointer"
                            : "opacity-50 bg-accent hover:bg-hoverBg cursor-not-allowed"
                        }`}
                      >
                        <span className="text-white">
                          <CgNotes />
                        </span>
                        Download Notes{" "}
                      </button>
                    </a>
                    <a href={data?.psp_url}>
                      <button
                        className={`w-full max-w-[200px] h-[48px] rounded-full text-white flex justify-center items-center gap-x-2  ${
                          data?.psp_url
                            ? "bg-accent hover:bg-hoverBg cursor-pointer"
                            : "opacity-50 bg-accent hover:bg-hoverBg cursor-not-allowed"
                        }`}
                      >
                        <span className="text-white">
                          <BiCodeAlt />
                        </span>
                        Start Solving
                      </button>
                    </a>
                  </div>
                </fieldset>
              </div>
              <div className="relative bg-white px-4 py-4 rounded-[4px]  shadow-shadow">
                <fieldset className="flex flex-col w-full p-4 rounded  h-max">
                  <legend>
                    <h2 className="text-2xl font-semibold px-2">Quick links</h2>
                  </legend>
                  <Link href="/topics" className="text-blueLink">
                    All topics
                  </Link>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopicId;
