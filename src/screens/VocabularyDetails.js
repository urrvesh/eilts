import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import VocabularyCard3 from "../components/VocabularyCard3";
import { useContext } from "../context/context";
import constants from "../utils/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VocabularyDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const carouselRef = React.useRef(null);
  const queryParams = new URLSearchParams(location.search);
  const { store, setStore } = useContext();

  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  const progressData = [
    { percentage: "10", label: "Learned", color: "#12b764" },
    { percentage: "60", label: "Need to review", color: "#ffab0a" },
    { percentage: "30", label: "Difficult", color: "#f04438" },
  ];

  React.useEffect(() => {
    setStore({ breadcrumb: [{ label: "Vocabulary", onClick: () => navigate(constants.route.vocabulary) }, { label: queryParams?.get("name") }] });
    return () => {
      setStore({ breadcrumb: [] });
    };
  }, []);

  return (
    <React.Fragment>
      <motion.div
        variants={{
          offscreen: { y: 30, opacity: 0 },
          onscreen: {
            y: 0,
            opacity: 1,
            zIndex: 1,
            transition: { duration: 0.6 },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="flex gap-8 w-full"
      >
        <div className="w-full flex lg:justify-start md:justify-between sm:justify-between gap-x-10">
          {progressData.map((item, i) => (
            <div key={i} className="w-fit flex flex-col items-center justify-center font-normal text-sm text-475467 leading-5">
              <div className="w-fit flex items-center space-x-1">
                <div className={`h-3 w-3 rounded-[3px] bg-${item?.color?.replace("#", "")}`} />
                <span className="truncate">
                  {store.screenSize > 768 && `${item?.percentage}%`} {item?.label}
                </span>
              </div>
              <span className="flex lg:hidden md:flex sm:flex truncate text-black font-medium">{item?.percentage}%</span>
            </div>
          ))}
        </div>
      </motion.div>
      <Carousel ref={carouselRef} showArrows={false} showIndicators={false} showStatus={false} transitionTime={500} showThumbs={false}>
        {data.map((d, i) => (
          <VocabularyCard3 key={i} onClick={() => carouselRef.current?.moveTo(carouselRef.current?.state?.selectedItem + 1)} />
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default React.memo(VocabularyDetails);
