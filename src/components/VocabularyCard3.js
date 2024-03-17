import React from "react";
import { motion } from "framer-motion";
import VocabularyCard2 from "./VocabularyCard2";

const VocabularyCard3 = ({ onClick, ...rest }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleFlip = () => {
    if (!isAnimating && !isFlipped) {
      setIsFlipped(!isFlipped);
      setIsAnimating(!isAnimating);
    }
  };

  const handleRepeatFlip = (e) => {
    e.stopPropagation();
    if (!isAnimating && isFlipped) {
      setIsFlipped(!isFlipped);
      setIsAnimating(!isAnimating);
    }
  };

  return (
    <div className="w-full flex justify-center">
    <div onClick={handleFlip} style={{ perspective: 5000 }} className="relative mt-5 h-[28rem] lg:h-[38rem] md:h-[38rem] sm:h-[56rem] min-w-10/12 lg:min-w-10/12 md:min-w-[98%] sm:min-w-[98%]" {...rest}>
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.1, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transition: "transform 0.6s", transformStyle: "preserve-3d" }}
      >
        <div
          className="bg-1f2544 rounded-xl p-10 text-white bg-vocab-card-background bg-auto bg-center bg-no-repeat w-full h-[24rem] flex items-center justify-center absolute cursor-pointer"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center justify-center relative h-full w-full">
            <span className="text-[32px] leading-5 font-medium">Rise</span>
            <span className="flex items-center space-x-2 w-fit font-medium absolute bottom-0">
              <img className="h-4 w-4" src={process.env.PUBLIC_URL + "/icons/flip.svg"} alt="flip" />
              <span className="whitespace-nowrap text-xs text-c5c5c5">tap to flip</span>
            </span>
          </div>
        </div>
        <div
          className="w-full bg-1f2544 rounded-xl p-10 lg:p-10 md:p-6 sm:p-6 text-white bg-vocab-card-background bg-auto bg-left-top bg-no-repeat absolute"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="h-8 w-8 flex items-center justify-center rounded border border-white absolute top-4 right-4 cursor-pointer"
            onClick={handleRepeatFlip}
          >
            <img className="h-5 w-5" src={process.env.PUBLIC_URL + "/icons/repeat.svg"} alt="" />
          </div>
          <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col">
            <span className="text-[32px] leading-5 font-medium mr-[106px] flex items-center justify-center lg:justify-center md:justify-start sm:justify-start">
              Rise
            </span>
            <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col border-l lg:border-l md:border-0 sm:border-0 pl-5 lg:pl-5 md:pl-0 sm:pl-0 text-left mt-5 lg:mt-0 md:mt-5 sm:mt-5 space-x-4 lg:space-x-4 md:space-x-4 sm:space-x-0 space-y-4 lg:space-y-0 md:space-y-0 sm:space-y-4">
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
             
            </div>
          </div>
          <div className="flex flex-col w-full mt-8 lg:mt-8 md:mt-6 sm:mt-6 items-start">
             <span className="font-medium text-base leading-5">Examples:</span>
              <ul className="flex flex-col items-start font-normal text-sm leading-5 space-y-1.5 mt-3">
                <li className="list-disc text-start ml-4">Parents should work to rise awareness.</li>
                <li className="list-disc text-start ml-4">The rise of social media has changes to woywe.</li>
                <li className="list-disc text-start ml-4">With the ongoing effects of global warming, Coastal.</li>
              </ul>
          </div>
          <div className="flex flex-col space-y-1.5 mt-8 lg:mt-8 md:mt-6 sm:mt-6">
            <button className="bg-12b764 h-11 rounded-md truncate px-4" onClick={() => onClick()}>
              I can use this word in ielts!
            </button>
            <button className="bg-ffab0a h-11 rounded-md truncate px-4" onClick={() => onClick()}>
              I need to review this word!
            </button>
            <button className="bg-f04438 h-11 rounded-md truncate px-4" onClick={() => onClick()}>
              This word is difficult to use in ielts!
            </button>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default React.memo(VocabularyCard3);
