import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Body from "../components/Body";
import constants from "../utils/constants";
import VocabularyCard2 from "../components/VocabularyCard2";
import VocabularyCard3 from "../components/VocabularyCard3";

const VocabularyDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <Body
      breadcrumb={[
        {
          label: "Vocabulary",
          onClick: () => navigate(constants.route.vocabulary),
        },
        { label: queryParams?.get("name") },
      ]}
      className="flex !p-0"
    >
      <div className="w-full py-8 pr-8 pl-6">
        <motion.div
          variants={{
            offscreen: {
              y: 30,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              zIndex: 1,
              transition: {
                duration: 0.6,
              },
            },
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="flex gap-8"
        >
          <div className="w-fit flex items-center font-normal text-sm text-475467 leading-5 space-x-1">
            <div className="h-3 w-3 rounded-[3px] bg-12b764"></div>
            <span>10% Learned</span>
          </div>
          <div className="w-fit flex items-center font-normal text-sm text-475467 leading-5 space-x-1">
            <div className="h-3 w-3 rounded-[3px] bg-ffab0a"></div>
            <span>60% Need to review</span>
          </div>
          <div className="w-fit flex items-center font-normal text-sm text-475467 leading-5 space-x-1">
            <div className="h-3 w-3 rounded-[3px] bg-f04438"></div>
            <span>30% Difficult</span>
          </div>
        </motion.div>
        <VocabularyCard3 className="mt-5" />
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="min-w-[340px] min-h-[calc(100vh-5rem)] border-l p-6 space-y-4"
      >
        <VocabularyCard2
          key={1}
          name="Collocation"
          data={[
            { label: "Rise awareness", background: "bg-dbc4f0" },
            { label: "Rise in crime", background: "bg-d4e7c5" },
            { label: "Rise in usage", background: "bg-aee2ff" },
          ]}
        />
        <VocabularyCard2
          key={2}
          name="Categories"
          data={[
            { label: "Family & children", background: "bg-f4c7ab" },
            { label: "Government & society", background: "bg-c6dcce" },
            { label: "Media & advertising", background: "bg-ffc5c5" },
          ]}
        />
      </motion.div>
    </Body>
  );
};

export default React.memo(VocabularyDetails);
