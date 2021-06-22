import { useEffect, useState } from "react";
import { transformForFinishPositions } from "../Utilities/transformForFinishPositions";

import Prizepools from "../Components/Prizepools";
import { transformForPrizepool } from "../Utilities/transformForPrizepool";
import { FinishPositions } from "../Components/FinishPositions";

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
      <Prizepools data={transformForPrizepool(handHistoryData)} />
      <FinishPositions data={transformForFinishPositions(handHistoryData)}/>
    </div>
  );
};

export default Analysis;
