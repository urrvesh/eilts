import React, { useEffect } from "react";
import { motion } from "framer-motion";

const VocabularyCard3 = ({ onClick }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [flippingClasses, setFlippingClasses] = React.useState("");

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

  const collocationData = [
    { label: "Rise awareness", background: "bg-dbc4f0" },
    { label: "Rise in crime", background: "bg-d4e7c5" },
    { label: "Rise in usage", background: "bg-aee2ff" },
  ];

  const categoriesData = [
    { label: "Family & children", background: "bg-f4c7ab" },
    { label: "Government & society", background: "bg-c6dcce" },
    { label: "Media & advertising", background: "bg-ffc5c5" },
  ];

  useEffect(() => {
    if (isFlipped) {
      setFlippingClasses("h-[38rem] lg:h-[38rem] md:h-[44rem] sm:h-[60rem]");
    } else {
      setTimeout(() => {
        setFlippingClasses("h-[26rem]");
      }, 200);
    }
  }, [isFlipped]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex justify-center"
    >
      <div
        onClick={handleFlip}
        style={{ perspective: 5000 }}
        className={`mt-5 ${flippingClasses} min-w-10/12 lg:min-w-10/12 md:min-w-[98%] sm:min-w-[98%]`}
      >
        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.4, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="bg-1f2544 rounded-xl p-10 text-white bg-vocab-card-background bg-auto bg-center bg-no-repeat w-full h-[24rem] flex items-center justify-center absolute cursor-pointer"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-center justify-center relative h-full w-full">
              <span className="text-[32px] leading-5 font-medium">Rise</span>
              <span className="flex items-center space-x-2 w-fit font-medium absolute -bottom-4">
                <img className="h-4 w-4" src={process.env.PUBLIC_URL + "/icons/flip.svg"} alt="flip" />
                <span className="whitespace-nowrap text-xs text-c5c5c5">Tap to flip</span>
              </span>
            </div>
          </div>
          <div
            className="w-full bg-1f2544 rounded-xl p-10 lg:p-10 md:p-6 sm:p-6 text-white bg-vocab-card-background bg-auto bg-left-top bg-no-repeat absolute"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div
              className="h-8 w-8 flex items-center justify-center rounded border border-white absolute top-4 right-4 cursor-pointer"
              onClick={handleRepeatFlip}
            >
              <img className="h-5 w-5" src={process.env.PUBLIC_URL + "/icons/repeat.svg"} alt="" />
            </div>
            <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col">
              <div className="flex flex-col items-start justify-center max-w-52 border-r lg:border-r md:border-0 sm:border-0">
                <div className="text-[32px] leading-5 font-medium mr-[106px] flex items-center justify-center lg:justify-center md:justify-start sm:justify-start">
                  Rise
                </div>
                <div className="flex flex-col w-full mt-8 lg:mt-8 md:mt-6 sm:mt-6 items-start">
                  <span className="font-medium text-base leading-5">Synonym:</span>
                  <div className="text-start mt-3 text-sm">adjust, adapt, become accustomed, get used</div>
                </div>
              </div>

              <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col border-l lg:border-l md:border-0 sm:border-0 pl-5 lg:pl-5 md:pl-0 sm:pl-0 text-left mt-5 lg:mt-0 md:mt-5 sm:mt-5 space-x-4 lg:space-x-4 md:space-x-4 sm:space-x-0 space-y-4 lg:space-y-0 md:space-y-0 sm:space-y-4">
                <div className="p-5 space-y-3 min-w-52 border rounded-lg border-ffffff12">
                  <span className="font-medium text-base leading-5">Collocation:</span>
                  <div className="space-y-2.5">
                    {collocationData?.map((item, index) => (
                      <div
                        key={index}
                        className={`h-8 w-fit flex items-center justify-center px-3 text-sm font-normal leading-5 rounded truncate ${item?.background}`}
                      >
                        {item?.label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 space-y-3 min-w-52 rounded-lg border border-ffffff12">
                  <span className="font-medium text-base leading-5">Categories:</span>
                  <div className="space-y-2.5">
                    {categoriesData?.map((item, index) => (
                      <div
                        key={index}
                        className={`h-8 w-fit flex items-center justify-center px-3 text-sm font-normal leading-5 rounded truncate ${item?.background}`}
                      >
                        {item?.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-8 lg:mt-8 md:mt-6 sm:mt-6 items-start">
              <span className="font-medium text-base leading-5">Examples:</span>
              <ul className="flex flex-col items-start font-normal text-sm leading-5 space-y-1.5 mt-3">
                <li className="list-disc text-start ml-5">Parents should work to rise awareness.</li>
                <li className="list-disc text-start ml-5">The rise of social media has changes to woywe.</li>
                <li className="list-disc text-start ml-5">With the ongoing effects of global warming, Coastal.</li>
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
    </motion.div>
  );
};

export default React.memo(VocabularyCard3);
