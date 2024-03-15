import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";
import VocabularyCard from "../components/VocabularyCard";
import constants from "../utils/constants";

const Vocabulary = () => {
  const navigate = useNavigate();
  const arrayToMap = new Array(10).fill(null);

  return (
    <Body>
      <motion.div
        variants={{
          offscreen: { x: 50, opacity: 0 },
          onscreen: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="text-[22px] font-medium leading-8"
      >
        Learn Vocabulary
      </motion.div>
      <motion.div
        variants={{
          show: {
            opacity: 1,
            transition: { delayChildren: 0.1, staggerChildren: 0.1 },
          },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 space-y-3"
      >
        {arrayToMap?.map((_, index) => (
          <VocabularyCard
            key={index}
            name={`Word Set ${index + 1}`}
            count={2 * index + 1}
            onClick={() => navigate(constants.route.vocabulary + `/${index + 1}?name=Word Set ${index + 1}`)}
          />
        ))}
      </motion.div>
    </Body>
  );
};

export default React.memo(Vocabulary);
