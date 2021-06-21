import { useEffect, useState } from "react";

import Prizepools from "../Components/Prizepools";
import { transformForPrizepool } from "../Utilities/transformForPrizepool";

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
    </div>
  );
};

export default Analysis;
