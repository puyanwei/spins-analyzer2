import { VictoryPie } from "victory";

const Prizepools = ({ data }) => (
  <VictoryPie data={data} colorScale={["tomato", "gold", "cyan", "navy"]} />
);

export default Prizepools;
