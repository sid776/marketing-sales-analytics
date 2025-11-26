'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Algorithm {
  name: string
  description: string
  features: string[]
  icon: string
}

const mlAlgorithms: Algorithm[] = [
  {
    name: 'Gradient Boosting Ensemble',
    description: 'Advanced ensemble method that combines multiple weak learners to create a strong predictive model',
    features: ['Sales Forecasting', 'Revenue Prediction', 'Trend Analysis', 'Anomaly Detection'],
    icon: '🤖'
  },
  {
    name: 'Random Forest Classifier',
    description: 'Ensemble learning method using multiple decision trees for robust classification',
    features: ['Customer Segmentation', 'Risk Assessment', 'Pattern Recognition'],
    icon: '🌲'
  },
  {
    name: 'K-Means Clustering',
    description: 'Unsupervised learning algorithm for grouping similar data points',
    features: ['Customer Segmentation', 'Market Analysis', 'Behavioral Clustering'],
    icon: '🔍'
  }
]

const dlAlgorithms: Algorithm[] = [
  {
    name: 'LSTM Neural Network',
    description: 'Long Short-Term Memory networks for sequential data and time series forecasting',
    features: ['Time Series Forecasting', 'Pattern Recognition', 'Sequence Prediction'],
    icon: '🧠'
  },
  {
    name: 'Deep Clustering',
    description: 'Neural network-based clustering for complex pattern discovery',
    features: ['Advanced Segmentation', 'Feature Learning', 'Non-linear Patterns'],
    icon: '🔬'
  },
  {
    name: 'Sentiment Analysis',
    description: 'Deep learning models for understanding customer sentiment and feedback',
    features: ['Text Analysis', 'Emotion Detection', 'Opinion Mining'],
    icon: '💭'
  }
]

const quantumAlgorithms: Algorithm[] = [
  {
    name: 'Quantum Approximate Optimization Algorithm (QAOA)',
    description: 'Hybrid quantum-classical algorithm for solving optimization problems',
    features: ['Portfolio Optimization', 'Resource Allocation', 'Route Planning'],
    icon: '⚛️'
  },
  {
    name: 'Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning for faster pattern recognition',
    features: ['Speedup in Training', 'Quantum Feature Maps', 'Quantum Kernels'],
    icon: '🔮'
  },
  {
    name: 'Quantum Annealing',
    description: 'Quantum computing technique for finding global optima',
    features: ['Global Optimization', 'Constraint Satisfaction', 'Multi-objective Optimization'],
    icon: '🌊'
  }
]

interface AlgorithmSectionProps {
  title: string
  algorithms: Algorithm[]
  color: string
  bgColor: string
}

function AlgorithmSection({ title, algorithms, color, bgColor }: AlgorithmSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="glass-effect rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between ${bgColor} hover:opacity-90 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{algorithms[0].icon}</span>
          <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
        </div>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {algorithms.map((algorithm, index) => (
                <motion.div
                  key={algorithm.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/30 rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">{algorithm.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{algorithm.name}</h4>
                      <p className="text-sm text-gray-700 mb-3">{algorithm.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {algorithm.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/50 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AlgorithmsInfo() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Advanced Algorithms
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Explore the cutting-edge algorithms powering our analytics
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AlgorithmSection
          title="Machine Learning"
          algorithms={mlAlgorithms}
          color="text-blue-600"
          bgColor="bg-blue-100"
        />
        <AlgorithmSection
          title="Deep Learning"
          algorithms={dlAlgorithms}
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />
        <AlgorithmSection
          title="Quantum Computing"
          algorithms={quantumAlgorithms}
          color="text-blue-700"
          bgColor="bg-blue-200"
        />
      </div>
    </div>
  )
}

