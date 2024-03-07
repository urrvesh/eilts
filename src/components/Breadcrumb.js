import React from "react";

const Breadcrumb = ({ data }) => {
  return (
    <div className="flex items-center gap-x-2 text-sm font-medium text-475467">
      {data?.map((item, index) => (
        <span className="flex items-center gap-x-2" key={index}>
          <span className="cursor-pointer hover:text-344054" onClick={item?.onClick}>
            {item?.label}
          </span>
          {data?.length - 1 !== index && <img className="h-2 w-1" src={process.env.PUBLIC_URL + "/icons/chevron-right.svg"} alt="Breadcrumb" />}
        </span>
      ))}
    </div>
  );
};

export default React.memo(Breadcrumb);
