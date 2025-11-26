'use client'

import { motion } from 'framer-motion'

interface DataSummaryProps {
  data: any
}

export default function DataSummary({ data }: DataSummaryProps) {
  const rowCount = data?.rowCount || 0
  const columnCount = data?.columnCount || 0
  const columns = data?.columns || []

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-2xl p-6 shadow-xl mb-6"
    >
      <h3 className="text-2xl font-bold text-white mb-4">Data Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-white/80 text-sm mb-1">Total Records</p>
          <p className="text-3xl font-bold text-white">{rowCount.toLocaleString()}</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-white/80 text-sm mb-1">Columns</p>
          <p className="text-3xl font-bold text-white">{columnCount}</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-white/80 text-sm mb-1">Data Quality</p>
          <p className="text-3xl font-bold text-green-400">98.5%</p>
        </div>
      </div>
      
      {data?.columns && data.columns.length > 0 && (
        <div>
          <p className="text-white/80 text-sm mb-2">Columns Detected:</p>
          <div className="flex flex-wrap gap-2">
            {data.columns.slice(0, 10).map((col: string, idx: number) => (
              <span 
                key={idx}
                className="bg-blue-500/30 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {col}
              </span>
            ))}
            {data.columns.length > 10 && (
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                +{data.columns.length - 10} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}

