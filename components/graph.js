import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Sentiment Analysis",
            font: {
                size: 20,
            },
        },
    },
};

export default function Graph() {
    const data = {
        labels: ["Positive", "Neutral", "Negative"],
        datasets: [
            {
                label: "Sentiment Analysis",
                data: [12, 19, 3],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 99, 132, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
}
