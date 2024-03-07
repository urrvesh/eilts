import React from "react";

const VocabularyCard3 = ({className}) => {
  return (
    <div className={`bg-1f2544 rounded-xl p-10 relative text-white ${className}`}>
      <div className="h-8 w-8 flex items-center justify-center rounded border border-white absolute top-4 right-4 cursor-pointer">
        <img src={process.env.PUBLIC_URL + "/icons/repeat.svg"} alt="" />
      </div>
      <div className="flex items-center">
        <span className="text-[32px] leading-5 font-medium mr-[106px]">
          Rise
        </span>
        <div className="border-l pl-5">
          <span className="font-medium text-base leading-5">Examples:</span>
          <ul className="font-normal text-sm leading-5 space-y-1.5 mt-3">
            <ol>Parents should work to rise awareness.</ol>
            <ol>The rise of social media has changes to woywe. .</ol>
            <ol>With the ongoing effects of global warming, Coastal.</ol>
          </ul>
        </div>
      </div>
      <div className="flex flex-col space-y-1.5 mt-[60px]">
        <button className="bg-12b764 h-11 rounded-md">I can use this word in ielts!</button>
        <button className="bg-ffab0a h-11 rounded-md">I need to review this word!</button>
        <button className="bg-f04438 h-11 rounded-md">This word is difficult to use in ielts!</button>
      </div>
    </div>
  );
};

export default React.memo(VocabularyCard3);
