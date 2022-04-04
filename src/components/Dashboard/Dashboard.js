import React from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 4041,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 6023,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 8026,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 15029,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 36001,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 50070,
            "revenue": 61000
        }
    ]
    return (
        <div className='p-10 grid grid-cols-2 gap-4 pt-10 justify-items-center'>
            <div >
                <h1 className='text-2xl font-bold text-blue-700 text-center pb-7'>Investment vs Revenue</h1>
                <LineChart width={400} height={300} data={data}>
                    <Line type="monotone" dataKey="revenue" ></Line>
                    <Line type="monotone" dataKey="sell" ></Line>
                    <YAxis dataKey="investment"></YAxis>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                </LineChart>

            </div>
            <div>
                <h1 className='text-2xl font-bold text-blue-700 text-center pb-7'>Month-wise Revenue</h1>
                <BarChart width={450} height={300} data={data}>
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;