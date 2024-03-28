import React from "react";
import { motion } from "framer-motion";

const VocabularyCard = ({ name, count, onClick = () => {}, ...rest }) => {
  return (
    <motion.div
      className="p-4 lg:p-8 md:p-6 sm:p-6 rounded-xl bg-f1f6f9 w-full lg:w-[669px] md:w-full sm:w-full relative cursor-pointer overflow-hidden"
      onClick={onClick}
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
      <div className="flex lg:justify-start md:justify-between sm:justify-between gap-4 lg:gap-8 md:gap-8 sm:gap-4 mt-4">
        <div className="w-1/3 lg:w-fit md:w-1/3 sm:w-1/3 flex flex-col items-center justify-center font-normal text-sm text-475467 leading-5">
          <div className="w-full flex items-center justify-center space-x-1 truncate">
            <div className="h-3 min-w-3 rounded-[3px] bg-12b764" />
            <div className="flex space-x-1 truncate">
              <p className="hidden lg:block md:hidden sm:hidden">10%</p> <p className="truncate">Learned</p>
            </div>
          </div>
          <span className="flex lg:hidden md:flex sm:flex truncate text-black font-medium">10%</span>
        </div>
        <div className="w-1/3 lg:w-fit md:w-1/3 sm:w-1/3 flex flex-col items-center justify-center font-normal text-sm text-475467 leading-5">
          <div className="w-full flex items-center justify-center space-x-1 truncate">
            <div className="h-3 min-w-3 rounded-[3px] bg-ffab0a" />
            <div className="flex space-x-1 truncate">
              <p className="hidden lg:block md:hidden sm:hidden">60%</p> <p className="truncate">Need to review</p>
            </div>
          </div>
          <span className="flex lg:hidden md:flex sm:flex truncate text-black font-medium">60%</span>
        </div>
        <div className="w-1/3 lg:w-fit md:w-1/3 sm:w-1/3 flex flex-col items-center justify-center font-normal text-sm text-475467 leading-5">
          <div className="w-full flex items-center justify-center space-x-1 truncate">
            <div className="h-3 min-w-3 rounded-[3px] bg-f04438" />
            <div className="flex space-x-1 truncate">
              <p className="hidden lg:block md:hidden sm:hidden">30%</p> <p className="truncate">Difficult</p>
            </div>
          </div>
          <span className="flex lg:hidden md:flex sm:flex truncate text-black font-medium">30%</span>
        </div>
      </div>
      <div
        className="h-8 w-8 flex justify-center items-center absolute border rounded border-4135431a top-4 lg:top-6 md:top-4 sm:top-4 right-6 lg:right-6 md:right-4 sm:right-4 cursor-pointer"
        onClick={onClick}
      >
        <img width={24} height={24} src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="" />
      </div>
    </motion.div>
  );
};

export default React.memo(VocabularyCard);
