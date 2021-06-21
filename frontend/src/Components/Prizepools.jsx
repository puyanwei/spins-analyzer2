import { VictoryPie } from "victory";

const Prizepools = ({ data }) => {
  return (
    <div>
      <VictoryPie data={data} colorScale={["tomato", "gold", "cyan", "navy"]} />
    </div>
  );
};

export default Prizepools;
