'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

interface DLResultsProps {
  results: any
}

export default function DLResults({ results }: DLResultsProps) {
  const sentimentData = [
    { name: 'Positive', value: results.sentiment.positive },
    { name: 'Neutral', value: results.sentiment.neutral },
    { name: 'Negative', value: results.sentiment.negative },
  ]

  const patternData = results.patterns.map((p: any) => ({
    pattern: p.pattern.replace(' ', '\n'),
    strength: p.strength * 100,
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="glass-effect rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🧠</span>
        <h3 className="text-2xl font-bold text-gray-800">DL Analysis</h3>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700 text-sm mb-1">Model: {results.model}</p>
        <p className="text-gray-700 text-sm">{results.layers} layers, {results.neurons} neurons</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Forecast Trends</h4>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={results.forecasts}>
              <defs>
                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="quarter" stroke="#374151" style={{ fontSize: '10px' }} />
              <YAxis stroke="#374151" style={{ fontSize: '10px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Area type="monotone" dataKey="forecast" stroke="#38bdf8" fillOpacity={1} fill="url(#colorForecast)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Sentiment Analysis</h4>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={sentimentData} layout="vertical">
              <XAxis type="number" stroke="#374151" style={{ fontSize: '10px' }} />
              <YAxis dataKey="name" type="category" stroke="#374151" style={{ fontSize: '10px' }} width={60} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value: number) => `${value}%`}
              />
              <Bar dataKey="value" fill="#10b981" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Pattern Strength</h4>
          <ResponsiveContainer width="100%" height={150}>
            <RadarChart data={patternData}>
              <PolarGrid stroke="rgba(55, 65, 81, 0.3)" />
              <PolarAngleAxis dataKey="pattern" stroke="#374151" style={{ fontSize: '10px' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#374151" style={{ fontSize: '10px' }} />
              <Radar name="Strength" dataKey="strength" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  )
}

