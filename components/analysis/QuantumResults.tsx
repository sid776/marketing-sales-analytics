'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from 'recharts'

interface QuantumResultsProps {
  results: any
}

export default function QuantumResults({ results }: QuantumResultsProps) {
  const correlationData = results.correlations.map((c: any) => ({
    name: `${c.factor1}\nvs\n${c.factor2}`,
    value: Math.abs(c.correlation) * 100,
  }))

  const optimizationData = results.optimizations.map((opt: any, idx: number) => ({
    name: opt.parameter.split(' ')[0],
    improvement: parseFloat(opt.improvement.replace('+', '').replace('%', '')),
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="glass-effect rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">⚛️</span>
        <h3 className="text-2xl font-bold text-white">Quantum Analysis</h3>
      </div>
      
      <div className="mb-4">
        <p className="text-white/80 text-sm mb-1">Algorithm: {results.algorithm}</p>
        <p className="text-white/80 text-sm">{results.qubits} qubits • {results.speedup} speedup</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-white font-semibold mb-2">Optimization Impact</h4>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={optimizationData}>
              <XAxis dataKey="name" stroke="#fff" style={{ fontSize: '10px' }} />
              <YAxis stroke="#fff" style={{ fontSize: '10px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '12px'
                }}
                formatter={(value: number) => `+${value}%`}
              />
              <Bar dataKey="improvement" fill="#fbbf24" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quantum Correlations</h4>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={correlationData} layout="vertical">
              <XAxis type="number" domain={[0, 100]} stroke="#fff" style={{ fontSize: '10px' }} />
              <YAxis dataKey="name" type="category" stroke="#fff" style={{ fontSize: '9px' }} width={80} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value: number) => `${value.toFixed(0)}%`}
              />
              <Bar dataKey="value" fill="#3b82f6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quantum Probabilities</h4>
          <div className="space-y-2">
            <div className="bg-white/10 rounded-lg p-2">
              <div className="flex justify-between mb-1">
                <span className="text-white text-xs">Success</span>
                <span className="text-white text-xs font-semibold">
                  {(results.probabilities.successProbability * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${results.probabilities.successProbability * 100}%` }}
                />
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-2">
              <div className="flex justify-between mb-1">
                <span className="text-white text-xs">Opportunity</span>
                <span className="text-white text-xs font-semibold">
                  {(results.probabilities.opportunityProbability * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{ width: `${results.probabilities.opportunityProbability * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

