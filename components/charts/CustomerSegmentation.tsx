'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface CustomerSegmentationProps {
  data: Array<{ name: string; value: number; color: string }>
}

// Default colors if not provided - yellow and blue theme
const defaultColors = ['#3b82f6', '#fbbf24', '#60a5fa', '#fcd34d']

export default function CustomerSegmentation({ data }: CustomerSegmentationProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(255,255,255,0.95)', 
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '8px',
            color: '#1f2937'
          }}
        />
        <Legend 
          wrapperStyle={{ color: '#4b5563' }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

