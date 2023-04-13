import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

type Props = {
  
}

const LineChart = ({labels}:{labels:string[]}) => {
    // const labels = ['Very Likely','Likely','Neutral',"Unlikely","Very Unlikely"];
    const data:any = {
    labels,
    datasets: [
        {
        fill: true,
        label: ['Number of users'],
        data: [21,70,50,80,73,75,75],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: ['rgba(0, 200, 250, 0.5)']
        },
    ],
    };
  return (
    <div><Line data={data}/></div>
  )
}

export default LineChart