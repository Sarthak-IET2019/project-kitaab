import Input from "@/components/input";

const CommentBox = () => {
  return (
    <div className="relative flex w-full mt-6">
      <fieldset className="flex flex-col w-full px-4 py-4 border-t-[2px] border-[#ebebeb] h-max gap-y-6">
        <legend>
          <h2 className="text-2xl font-semibold px-2">Comments</h2>
        </legend>
        <Input register={() => {}} placeholder="Type your comment here..." />
        <div className="w-full text-ellipsis max-w-[700px] whitespace-normal gap-x-4 flex items-center justify-center p-2 bg-slate-100 rounded">
          <img src="/avatar.png" className="h-[60px] w-[60px] mb-2" />
          Hey, I have a doubt regarding the time complexity of the above
          algorithm, can you please explain it to me in the comments once again!
        </div>
        <div className="ml-16 w-full text-ellipsis max-w-[700px] whitespace-normal gap-x-4 flex items-center justify-start p-2 bg-slate-100 rounded">
          <img src="/mentor.png" className="h-[60px] w-[60px] mb-2" />
          Yes surely we can connect for the same.
        </div>
      </fieldset>
    </div>
  );
};

export default CommentBox;
