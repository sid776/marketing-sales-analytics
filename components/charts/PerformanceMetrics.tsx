'use client'

import { motion } from 'framer-motion'

const defaultMetrics = [
  { label: 'Total Revenue', value: '$741,000', change: '+12.5%', color: 'bg-blue-500', icon: '💰' },
  { label: 'Active Customers', value: '12,450', change: '+8.2%', color: 'bg-yellow-400', icon: '👥' },
  { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', color: 'bg-blue-400', icon: '📈' },
  { label: 'Avg. Order Value', value: '$245', change: '+5.1%', color: 'bg-yellow-500', icon: '🛒' },
]

interface PerformanceMetricsProps {
  metrics?: Array<{ label: string; value: string; change: string; color: string; icon: string }>
}

export default function PerformanceMetrics({ metrics = defaultMetrics }: PerformanceMetricsProps) {
  return (
    <>
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`${metric.color} rounded-2xl p-6 shadow-xl text-white opacity-90 hover:opacity-100 transition-opacity`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl">{metric.icon}</span>
            <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded-full">
              {metric.change}
            </span>
          </div>
          <h3 className="text-sm font-medium opacity-90 mb-1">{metric.label}</h3>
          <p className="text-3xl font-bold">{metric.value}</p>
        </motion.div>
      ))}
    </>
  )
}

