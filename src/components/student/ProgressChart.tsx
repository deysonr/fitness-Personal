
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ProgressData {
  date: string;
  completed: number;
  target: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md text-sm">
        <p className="text-gray-600 mb-1">{`Data: ${label}`}</p>
        <p className="text-fitness-secondary font-medium">{`Concluídos: ${payload[0].value} exercícios`}</p>
        <p className="text-fitness-primary font-medium">{`Meta: ${payload[1].value} exercícios`}</p>
      </div>
    );
  }

  return null;
};

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Progresso de Exercícios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#888888"
                tickLine={false}
                axisLine={false}
                fontSize={12}
              />
              <YAxis 
                stroke="#888888"
                tickLine={false}
                axisLine={false}
                fontSize={12}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="completed"
                stroke="#10b981"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                name="Exercícios Concluídos"
                dot={{ strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#3b82f6" 
                strokeDasharray="5 5"
                strokeWidth={2}
                name="Meta"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
