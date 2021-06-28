import { useEffect, useState } from "react";
import {
  finishPositionTransform,
  prizePoolTransform,
} from "../Utilities/dataTransform";

import Prizepools from "../Components/Prizepools";
import FinishPositions from "../Components/FinishPositions";

const Analysis = () => {
  const [handHistoryData, setHandHistoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setHandHistoryData(data));
  }, []);

  return (
    <div>
      <h1>Analysis Page</h1>
      <Prizepools data={prizePoolTransform(handHistoryData)} />
      <FinishPositions data={finishPositionTransform(handHistoryData)} />
    </div>
  );
};

export default Analysis;
