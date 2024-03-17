import React from "react";

const VocabularyCard2 = ({ name, data }) => {
  return (
    <div className="p-5 bg-f5f5f5 space-y-3 rounded-xl min-w-52">
      <span className="font-medium text-base leading-5 text-black">{name}:</span>
      <div className="space-y-2.5">
        {data?.map((item, i) => (
          <div
            key={i}
            className={`h-8 w-fit flex items-center justify-center px-3 text-sm font-normal leading-5 rounded truncate ${item?.background}`}
          >
            {item?.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(VocabularyCard2);
