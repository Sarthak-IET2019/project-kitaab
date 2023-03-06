const AuthorBox = ({ data }) => {
  return (
    <div className="relative bg-white px-4 py-4 rounded-[4px] gap-y-6 flex flex-col">
      <fieldset className="flex flex-col w-full p-4 rounded border-[2px] border-[#ebebeb] h-max">
        <legend>
          <h2 className="text-2xl font-semibold px-2">Your Author</h2>
        </legend>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="">{data?.author?.name}</h3>
            <h3 className="mt-2">
              <a
                href={`mailto:${data?.author?.email}`}
                className="text-blueLink"
              >
                {data?.author?.email}
              </a>
            </h3>
          </div>
          <div className="relative overflow-hidden w-[60px] h-[60px]">
            <img src={data?.author?.avatar_url} alt="Cannot load" />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default AuthorBox;
