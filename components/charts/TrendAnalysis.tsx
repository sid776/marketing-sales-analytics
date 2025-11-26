'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface TrendAnalysisProps {
  data: Array<{ date: string; value: number }>
}

export default function TrendAnalysis({ data }: TrendAnalysisProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
        <XAxis 
          dataKey="date" 
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
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#fbbf24" 
          fillOpacity={1} 
          fill="url(#colorValue)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

