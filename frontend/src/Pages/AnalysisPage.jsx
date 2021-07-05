import { useEffect, useState } from "react";
import styled from "styled-components";
import { countHashKeys } from "../Utilities/common";

import Prizepools from "../Components/Prizepools";
import OpponentRegion from "../Components/OpponentRegion";

const AnalysisPage = () => {
  const [handHistoryData, setHandHistoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setHandHistoryData(data));
  }, []);

  return (
    <div>
      <h1>Analysis Page</h1>
      <GraphStyle>
        <Prizepools data={countHashKeys(handHistoryData, "prizePool")} />
      </GraphStyle>
      <GraphStyle>
        <OpponentRegion data={countHashKeys(handHistoryData, "result")} />
      </GraphStyle>
    </div>
  );
};

const GraphStyle = styled.div`
  display: block;
  margin: 3rem auto;
  width: 30rem;
`;

export default AnalysisPage;
