import { VictoryChart, VictoryBar, VictoryTheme, VictoryLabel } from "victory";

const FinishPositions = ({ data }) => (
    <VictoryChart width={400} theme={VictoryTheme.material} domainPadding={30}>
      <VictoryBar
        barWidth={50}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel dy={30} />}
        cornerRadius={{ topLeft: 10, topRight: 10 }}
        style={{ data: { fill: "#c43a31" } }}
        categories={{
          x: ["1st", "2nd", "3rd"],
        }}
        data={data}
      />
    </VictoryChart>
);

export default FinishPositions