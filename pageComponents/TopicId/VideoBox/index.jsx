import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import YouTube from "react-youtube";

const VideoBox = ({ data, setData, localLikes }) => {
  // video options
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="flex w-full justify-center mb-8 flex-col">
      <YouTube
        videoId={data?.videoId}
        opts={opts}
        className="w-full h-full flex relative"
      />
      <div className="w-full flex gap-x-4 mt-6">
        <button
          className="bg-accent text-white p-2 rounded hover:bg-hoverBg"
          onClick={() => {
            setData({ ...data, likes: localLikes + 1 });
          }}
        >
          <AiOutlineLike size={"24px"} />
        </button>
        <button
          className="bg-accent text-white p-2 rounded hover:bg-hoverBg"
          onClick={() => {
            setData({ ...data, likes: localLikes - 1 });
          }}
        >
          <AiOutlineDislike size={"24px"} />
        </button>
      </div>
    </div>
  );
};

export default VideoBox;
