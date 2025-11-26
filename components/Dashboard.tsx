'use client'

import { motion } from 'framer-motion'
import SalesChart from './charts/SalesChart'
import RevenueChart from './charts/RevenueChart'
import CustomerSegmentation from './charts/CustomerSegmentation'
import ConversionFunnel from './charts/ConversionFunnel'
import TrendAnalysis from './charts/TrendAnalysis'
import PerformanceMetrics from './charts/PerformanceMetrics'
import AlgorithmsInfo from './AlgorithmsInfo'

interface DashboardProps {
  sampleData?: any
}

export default function Dashboard({ sampleData }: DashboardProps) {
  const defaultSampleData = {
    sales: [
      { month: 'Jan', sales: 45000, target: 50000 },
      { month: 'Feb', sales: 52000, target: 50000 },
      { month: 'Mar', sales: 48000, target: 50000 },
      { month: 'Apr', sales: 61000, target: 55000 },
      { month: 'May', sales: 55000, target: 55000 },
      { month: 'Jun', sales: 67000, target: 60000 },
    ],
    revenue: [
      { quarter: 'Q1', revenue: 145000, profit: 43500 },
      { quarter: 'Q2', revenue: 183000, profit: 54900 },
      { quarter: 'Q3', revenue: 198000, profit: 59400 },
      { quarter: 'Q4', revenue: 215000, profit: 64500 },
    ],
    segments: [
      { name: 'Enterprise', value: 35, color: '#3b82f6' },
      { name: 'SMB', value: 28, color: '#fbbf24' },
      { name: 'Startup', value: 22, color: '#60a5fa' },
      { name: 'Individual', value: 15, color: '#fcd34d' },
    ],
    funnel: [
      { stage: 'Visitors', count: 10000, percentage: 100 },
      { stage: 'Leads', count: 2500, percentage: 25 },
      { stage: 'MQL', count: 1200, percentage: 12 },
      { stage: 'SQL', count: 600, percentage: 6 },
      { stage: 'Opportunities', count: 300, percentage: 3 },
      { stage: 'Customers', count: 150, percentage: 1.5 },
    ],
    trends: [
      { date: '2024-01', value: 120 },
      { date: '2024-02', value: 135 },
      { date: '2024-03', value: 128 },
      { date: '2024-04', value: 145 },
      { date: '2024-05', value: 152 },
      { date: '2024-06', value: 168 },
    ],
  }

  const data = sampleData || defaultSampleData

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AlgorithmsInfo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <PerformanceMetrics metrics={data.metrics} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sales Performance</h2>
          <SalesChart data={data.sales} />
        </div>

        <div className="glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Revenue & Profit</h2>
          <RevenueChart data={data.revenue} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Segmentation</h2>
          <CustomerSegmentation data={data.segments} />
        </div>

        <div className="glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conversion Funnel</h2>
          <ConversionFunnel data={data.funnel} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Trend Analysis</h2>
          <TrendAnalysis data={data.trends} />
        </div>
      </motion.div>
    </div>
  )
}

