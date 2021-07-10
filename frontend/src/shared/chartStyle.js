import styled from "styled-components";

const ChartStyle = styled.div`
  display: block;
  margin: 3rem auto;
  width: ${({ width = 30 }) => width}rem;
`;

export { ChartStyle };
