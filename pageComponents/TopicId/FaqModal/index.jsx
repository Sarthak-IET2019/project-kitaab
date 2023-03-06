const FaqBox = ({ data }) => {
  return (
    <div className="flex w-full mt-6">
      <fieldset className="flex flex-col w-full px-4 py-4 border-t-[2px] border-[#ebebeb] h-max">
        <legend>
          <h2 className="text-2xl font-semibold px-2">FAQs</h2>
        </legend>
        <p className="text-ellipsis whitespace-normal w-[800px] text-justify">
          {data?.description}
        </p>
      </fieldset>
    </div>
  );
};

export default FaqBox;
