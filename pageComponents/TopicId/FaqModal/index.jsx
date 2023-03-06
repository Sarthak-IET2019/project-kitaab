const FaqBox = ({ data }) => {
  return (
    <div className="flex w-full mt-6">
      <fieldset className="flex flex-col w-full px-4 py-4 border-t-[2px] border-[#ebebeb] h-max gap-y-6">
        <legend>
          <h2 className="text-2xl font-semibold px-2">FAQs</h2>
        </legend>
        <details className="text-md font-normal max-w-[800px] whitespace-normal text-justify">
          <summary className="text-xl font-semibold text-accent">
            What is the best motivation for doing DSA?
          </summary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </details>
        <details className="text-md font-normal max-w-[800px] whitespace-normal text-justify">
          <summary className="text-xl font-semibold text-accent">
            Why do we need DSA?
          </summary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </details>
        <details className="text-md font-normal max-w-[800px] whitespace-normal text-justify">
          <summary className="text-xl font-semibold text-accent">
            What if, I am unable to write a single line of code?
          </summary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </details>
      </fieldset>
    </div>
  );
};

export default FaqBox;
