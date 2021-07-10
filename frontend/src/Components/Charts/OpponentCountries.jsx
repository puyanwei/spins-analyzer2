import styled from "styled-components";
import { Bar } from "react-chartjs-2";

const OpponentCountries = ({ data }) => {
  const chartsData = {
    labels: Object.keys(data),
    datasets: [
      {
        axis: "y",
        barPercentage: 1,
        barThickness: 6,
        label: "Finish positions",
        data: Object.values(data),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Opponent Countries",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <OpponentCountriesChartStyle>
      <Bar data={chartsData} options={options} />
    </OpponentCountriesChartStyle>
  );
};

const OpponentCountriesChartStyle = styled.div`
  display: block;
  margin: 3rem auto;
  width: 30rem;
  height: 100rem;
`;

export default OpponentCountries;
