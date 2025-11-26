'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface ConversionFunnelProps {
  data: Array<{ stage: string; count: number; percentage: number }>
}

export default function ConversionFunnel({ data }: ConversionFunnelProps) {
  const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#fbbf24', '#fcd34d', '#fef08a']
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={data} 
        layout="vertical"
        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
        <XAxis type="number" stroke="#4b5563" style={{ fontSize: '12px' }} />
        <YAxis 
          dataKey="stage" 
          type="category" 
          stroke="#4b5563"
          style={{ fontSize: '12px' }}
          width={90}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(255,255,255,0.95)', 
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '8px',
            color: '#1f2937'
          }}
          formatter={(value: number, name: string, props: any) => [
            `${value.toLocaleString()} (${props.payload.percentage}%)`,
            'Count'
          ]}
        />
        <Bar 
          dataKey="count" 
          radius={[0, 8, 8, 0]}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

