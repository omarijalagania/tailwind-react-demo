import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

function DataVisualization() {
  const data = [
    {
      name: "01 დეკ",
      time: "2020-11-04 06:25:01",
      რაოდენობა: 44,
      priority: "high",
      ფასი: 24,
    },
    {
      name: "02 დეკ",
      time: "2020-11-03 06:25:01",
      რაოდენობა: 24,
      priority: "medium",
      ფასი: 15,
    },
    {
      name: "03 დეკ",
      time: "2020-11-02 06:25:01",
      რაოდენობა: 34,
      priority: "low",
      ფასი: 10,
    },
    {
      name: "04 დეკ",
      time: "2020-11-01 06:25:01",
      რაოდენობა: 14,
      priority: "high",
      ფასი: 20,
    },
    {
      name: "05 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 4,
      priority: "low",
      ფასი: 23,
    },
    {
      name: "06 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 14,
      priority: "low",
      ფასი: 34,
    },
    {
      name: "07 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 30,
      priority: "high",
      ფასი: 15,
    },
    {
      name: "08 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 15,
      priority: "high",
      ფასი: 25,
    },
    {
      name: "09 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 10,
      priority: "high",
      ფასი: 35,
    },
    {
      name: "10 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 18,
      priority: "high",
      ფასი: 30,
    },
    {
      name: "11 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 28,
      priority: "high",
      ფასი: 31,
    },
    {
      name: "12 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 16,
      priority: "high",
      ფასი: 25,
    },
    {
      name: "13 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 10,
      priority: "high",
      ფასი: 25,
    },
    {
      name: "14 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 35,
      priority: "high",
      ფასი: 20,
    },
    {
      name: "15 დეკ",
      time: "2020-10-04 06:25:01",
      რაოდენობა: 20,
      priority: "high",
      ფასი: 12,
    },
  ];

  return (
    <div className="lg:px-40 py-10 ">
      <h1 className="text-center">მონაცემების ვიზუალიზაცია</h1>
       <AnimationOnScroll animateIn="animate__fadeInLeftBig">
      <ResponsiveContainer width="96%" height={350}>
        <AreaChart
          width={730}
          height={455}
          data={data}
          margin={{ top: 35, right: 30, left: 30, bottom: 15 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4a89dc" stopOpacity={0.8} />
              <stop offset="60%" stopColor="#4a89dc" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="60%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="1" vertical="" />
          <Tooltip
            contentStyle={{
              width: "200px",
              border: "0",
              fontSize: "12px",
              borderRadius: "5px",
              fontWeight: "bold",
              padding: "10px 0 10px 20px",
            }}
            itemStyle={{}}
            cursor={false}
          />
          <Area
            type="monotone"
            dataKey="რაოდენობა"
            stroke="#4a89dc"
            fillOpacity={1}
            fill="url(#colorUv)"
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="ფასი"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
            activeDot={{ r: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      </AnimationOnScroll>
    </div>
  );
}

export default DataVisualization;
