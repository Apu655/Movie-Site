import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {};

const BarChart = ({ labels }: { labels: any }) => {
  const data: any = {
    labels,
    datasets: [
      {
        fill: true,
        label: ["Revenues by Year (Thousands)"],
        data: [21, 70, 50, 80, 73, 75, 75],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: ["rgba(0, 200, 250, 0.5)"],
      },
    ],
  };
  return <Bar data={data} />;
};

export default BarChart;
