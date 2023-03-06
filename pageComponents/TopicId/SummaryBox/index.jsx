const SummaryBox = ({ summary }) => {
  return (
    <div className="relative flex flex-col w-full">
      <fieldset className="flex flex-col w-full px-4 py-4 border-t-[2px] border-[#ebebeb] h-max">
        <legend>
          <h2 className="text-2xl font-semibold px-2">Summary</h2>
        </legend>
        <p className="text-ellipsis whitespace-normal w-[800px] text-justify">
          {summary}
        </p>
      </fieldset>
    </div>
  );
};

export default SummaryBox;
