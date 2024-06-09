import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, expenses: 2400 },
  { name: 'Feb', sales: 3000, expenses: 1398 },
  { name: 'Mar', sales: 2000, expenses: 9800 },
  { name: 'Apr', sales: 2780, expenses: 3908 },
  { name: 'May', sales: 1890, expenses: 4800 },
  { name: 'Jun', sales: 2390, expenses: 3800 },
  { name: 'Jul', sales: 3490, expenses: 4300 },
];

const AreaChartComponent = ({ isDarkMode, showGrid }) => {
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (month) => {
    setFilteredData(data.filter(d => d.name === month));
  };

  const resetFilter = () => {
    setFilteredData(data);
  };

  const gridColor = isDarkMode ? '#444' : '#ccc';
  const textColor = isDarkMode ? '#ddd' : '#333';

  return (
    <div className={`p-4 rounded-lg w-full max-w-4xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-center text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Monthly Sales and Expenses</h2>
      <div className="flex justify-between mb-4">
        <div>
          {data.map((d, index) => (
            <button
              key={index}
              className={`mr-2 p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500`}
              onClick={() => filterData(d.name)}
            >
              {d.name}
            </button>
          ))}
          <button
            className={`p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500`}
            onClick={resetFilter}
          >
            Reset
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={filteredData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />}
          <XAxis dataKey="name" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip
            contentStyle={{ backgroundColor: isDarkMode ? '#333' : '#fff', borderColor: gridColor, borderRadius: '8px', color: textColor }}
            itemStyle={{ color: textColor }}
            cursor={{ stroke: '#8884d8', strokeWidth: 2 }}
          />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ color: textColor }} />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#82ca9d"
            fill="url(#colorSales)"
            isAnimationActive={true}
            animationBegin={400}
            animationDuration={1500}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#8884d8"
            fill="url(#colorExpenses)"
            isAnimationActive={true}
            animationBegin={400}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaChartComponent;
