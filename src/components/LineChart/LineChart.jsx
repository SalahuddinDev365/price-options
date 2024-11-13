import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentsData = [
        { id: 1, name: "Alice", math: 78, physics: 84, chemistry: 79 },
        { id: 2, name: "Bob", math: 85, physics: 78, chemistry: 82 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
        { id: 4, name: "David", math: 68, physics: 72, chemistry: 69 },
        { id: 5, name: "Eve", math: 74, physics: 76, chemistry: 77 },
        { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 84 },
        { id: 7, name: "Grace", math: 95, physics: 94, chemistry: 90 },
        { id: 8, name: "Hank", math: 82, physics: 80, chemistry: 78 },
        { id: 9, name: "Ivy", math: 76, physics: 79, chemistry: 73 },
        { id: 10, name: "Jack", math: 89, physics: 83, chemistry: 86 }
      ];
      

    return (
        <div>
            <LChart width={800} height={400} data={studentsData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;