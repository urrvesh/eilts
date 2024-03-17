import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Body from "../components/Body";
import constants from "../utils/constants";
import VocabularyCard2 from "../components/VocabularyCard2";
import VocabularyCard3 from "../components/VocabularyCard3";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useContext } from "../context/context";

const VocabularyDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const carouselRef = React.useRef(null);
  const queryParams = new URLSearchParams(location.search);
  const { screenSize } = useContext();

  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  const progressData = [
    { percentage: "10", label: "Learned", color: "#12b764" },
    { percentage: "60", label: "Need to review", color: "#ffab0a" },
    { percentage: "30", label: "Difficult", color: "#f04438" },
  ];

  return (
    <Body
      breadcrumb={[{ label: "Vocabulary", onClick: () => navigate(constants.route.vocabulary) }, { label: queryParams?.get("name") }]}
      className="flex !p-0"
    >
      <div className="w-full py-8 lg:py-8 md:py-6 sm:py-4 pr-8 lg:pr-8 md:pr-6 sm:pr-4 pl-4 lg:pl-8 md:pl-6 sm:pl-4 overflow-y-auto">
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
                    {screenSize > 768 && `${item?.percentage}%`} {item?.label}
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
      </div>
      <div className="min-w-[280px] lg:min-w-[340px] md:min-w-[280px] min-h-[calc(100vh-5rem)] border-l p-6 space-y-4 block lg:block md:block sm:hidden ">
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
    </Body>
  );
};

export default React.memo(VocabularyDetails);
