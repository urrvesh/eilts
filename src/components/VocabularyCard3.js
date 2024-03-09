import React from "react";
import { motion } from "framer-motion";

const VocabularyCard3 = ({ ...rest }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div {...rest}>
      <div
        onClick={handleFlip}
        style={{ perspective: 2000, height:"24rem" }}
        className="relative"
      >
        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.2, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{
            transition: "transform 0.6s",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="bg-1f2544 rounded-xl p-10 text-white bg-vocab-card-background bg-auto bg-left-top bg-no-repeat w-full h-[24rem] flex items-center justify-center absolute"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-center justify-center">
              <span className="text-[32px] leading-5 font-medium">Rise</span>
            </div>
          </div>
          <div
            className="w-full bg-1f2544 rounded-xl p-10 text-white bg-vocab-card-background bg-auto bg-left-top bg-no-repeat absolute"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="h-8 w-8 flex items-center justify-center rounded border border-white absolute top-4 right-4 cursor-pointer">
              <img src={process.env.PUBLIC_URL + "/icons/repeat.svg"} alt="" />
            </div>
            <div className="flex items-center">
              <span className="text-[32px] leading-5 font-medium mr-[106px]">
                Rise
              </span>
              <div className="border-l pl-5">
                <span className="font-medium text-base leading-5">
                  Examples:
                </span>
                <ul className="font-normal text-sm leading-5 space-y-1.5 mt-3">
                  <ol>Parents should work to rise awareness.</ol>
                  <ol>The rise of social media has changes to woywe. .</ol>
                  <ol>With the ongoing effects of global warming, Coastal.</ol>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 mt-[60px]">
              <button
                className="bg-12b764 h-11 rounded-md"
                onClick={(e) => e.stopPropagation()}
              >
                I can use this word in ielts!
              </button>
              <button
                className="bg-ffab0a h-11 rounded-md"
                onClick={(e) => e.stopPropagation()}
              >
                I need to review this word!
              </button>
              <button
                className="bg-f04438 h-11 rounded-md"
                onClick={(e) => e.stopPropagation()}
              >
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
