'use client'

import { motion } from 'framer-motion'
import MLResults from './analysis/MLResults'
import DLResults from './analysis/DLResults'
import QuantumResults from './analysis/QuantumResults'
import DataSummary from './analysis/DataSummary'

interface AnalysisResultsProps {
  results: {
    ml: any
    dl: any
    quantum: any
    rawData: any
  }
}

export default function AnalysisResults({ results }: AnalysisResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">
          Analysis Complete
        </h2>
        <p className="text-white/80">
          Advanced algorithms have processed your data
        </p>
      </div>

      <DataSummary data={results.rawData} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MLResults results={results.ml} />
        <DLResults results={results.dl} />
        <QuantumResults results={results.quantum} />
      </div>
    </motion.div>
  )
}

