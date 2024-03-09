import React from "react";
import { motion } from "framer-motion";

const VocabularyCard2 = ({ name, data }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        show: {
          opacity: 1,
          scale: 1,
          zIndex: 1,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
          },
        },
      }}
      className="p-5 bg-f5f5f5 space-y-3 rounded-xl"
    >
      <span className="font-medium text-base leading-5">{name}:</span>
      <div className="space-y-2.5">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`h-8 w-fit flex items-center justify-center px-3 text-sm font-normal leading-5 rounded ${item?.background}`}
          >
            {item?.label}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(VocabularyCard2);
