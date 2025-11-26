'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface RevenueChartProps {
  data: Array<{ quarter: string; revenue: number; profit: number }>
}

export default function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
        <XAxis 
          dataKey="quarter" 
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
        <Bar dataKey="revenue" fill="#38bdf8" name="Revenue" radius={[8, 8, 0, 0]} />
        <Bar dataKey="profit" fill="#10b981" name="Profit" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

