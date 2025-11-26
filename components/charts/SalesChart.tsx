'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface SalesChartProps {
  data: Array<{ month: string; sales: number; target: number }>
}

export default function SalesChart({ data }: SalesChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
        <XAxis 
          dataKey="month" 
          stroke="#4b5563"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#4b5563"
          style={{ fontSize: '12px' }}
        />
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
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#fbbf24" 
          strokeWidth={3}
          dot={{ fill: '#fbbf24', r: 5 }}
          name="Actual Sales"
        />
        <Line 
          type="monotone" 
          dataKey="target" 
          stroke="#3b82f6" 
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ fill: '#3b82f6', r: 4 }}
          name="Target"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

