import { useEffect, useState } from "react";
import { countHashKeys } from "../Utilities/common";

import Prizepools from "../Components/Charts/Prizepools";
import OpponentCountries from "../Components/Charts/OpponentCountries";
import FinishPositions from "../Components/Charts/FinishPositions";

const AnalysisPage = () => {
  const [handHistoryData, setHandHistoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setHandHistoryData(data));
  }, []);

  const opponentCountriesCount = {
    ...countHashKeys(handHistoryData, "firstCountry"),
    ...countHashKeys(handHistoryData, "secondCountry"),
    ...countHashKeys(handHistoryData, "thirdCountry"),
  };

  return (
    <div>
      <h1>Analysis Page</h1>
      <Prizepools data={countHashKeys(handHistoryData, "prizePool")} />
      <FinishPositions data={countHashKeys(handHistoryData, "result")} />
      <OpponentCountries data={opponentCountriesCount} />
    </div>
  );
};

export default AnalysisPage;
