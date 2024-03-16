import React from "react";
import { motion } from "framer-motion";

const VocabularyCard = ({ name, count, onClick = () => {}, key, ...rest }) => {
  return (
    <motion.div
      className="p-8 rounded-xl bg-f1f6f9 w-full lg:w-[669px] md:w-full sm:w-full relative"
      variants={{
        show: {
          y: 0,
          opacity: 1,
          transition: { y: { stiffness: 1000, velocity: -100 } },
        },
        hidden: {
          y: 100,
          opacity: 0,
          transition: { y: { stiffness: 1000 } },
        },
      }}
      {...rest}
    >
      <div className="flex space-x-2">
        <span className="font-medium text-xl leading-5 text-101828">{name}</span>
        <span className="font-medium text-sm leading-5 text-475467">({count})</span>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col gap-4 lg:gap-8 md:gap-8 sm:gap-4 mt-4">
        <div className="w-fit flex items-center font-normal text-sm text-475467 leading-5 space-x-1">
          <div className="h-3 w-3 rounded-[3px] bg-12b764"></div>
          <span className="truncate">10% Learned</span>
        </div>
        <div className="w-fit flex items-center font-normal text-sm text-475467 leading-5 space-x-1">
          <div className="h-3 w-3 rounded-[3px] bg-ffab0a"></div>
          <span className="truncate">60% Need to review</span>
        </div>
        <div className="w-fit flex items-center font-normal text-sm text-475467 leading-5 space-x-1">
          <div className="h-3 w-3 rounded-[3px] bg-f04438"></div>
          <span className="truncate">30% Difficult</span>
        </div>
      </div>
      <div
        className="h-8 w-8 flex justify-center items-center absolute border rounded border-4135431a top-6 right-6 cursor-pointer"
        onClick={onClick}
      >
        <img width={24} height={24} src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="" />
      </div>
    </motion.div>
  );
};

export default React.memo(VocabularyCard);
