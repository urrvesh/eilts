import React from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";
import VocabularyCard from "../components/VocabularyCard";
import constants from "../utils/constants";

const Vocabulary = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <div className="text-[22px] font-medium leading-8">Learn Vocabulary</div>
      <div className="mt-6 space-y-3">
        <VocabularyCard name="Word Set 1" count="25" onClick={() => navigate(constants.route.vocabulary + "/1?name=Word Set 1")} />
        <VocabularyCard name="Word Set 2" count="15" onClick={() => navigate(constants.route.vocabulary + "/2?name=Word Set 2")} />
      </div>
    </Body>
  );
};

export default React.memo(Vocabulary);
