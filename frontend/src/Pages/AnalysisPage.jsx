import { useEffect, useState } from "react";
import styled from "styled-components";
import { prizePoolTransform } from "../Utilities/dataTransform";
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
      <CenteringStyle>
        <Prizepools data={prizePoolTransform(handHistoryData)} />
      </CenteringStyle>
      <CenteringStyle>
        <OpponentRegion data={countHashKeys(handHistoryData, "result")} />
      </CenteringStyle>
    </div>
  );
};

const CenteringStyle = styled.div`
  display: block;
  margin: 0 auto;
  width: 30rem;
`;

export default AnalysisPage;
