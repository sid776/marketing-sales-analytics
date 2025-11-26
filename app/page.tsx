'use client'

import { useState, useEffect } from 'react'
import Dashboard from '@/components/Dashboard'
import FileUpload from '@/components/FileUpload'
import AnalysisResults from '@/components/AnalysisResults'

export default function Home() {
  const [uploadedData, setUploadedData] = useState<any>(null)
  const [analysisResults, setAnalysisResults] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [sampleData, setSampleData] = useState<any>(null)

  // For GitHub Pages, use environment variable or default to localhost for development
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

  useEffect(() => {
    // Fetch sample data from backend
    fetch(`${API_URL}/api/sample-data`)
      .then(res => res.json())
      .then(data => setSampleData(data))
      .catch(err => console.error('Failed to fetch sample data:', err))
  }, [])

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const results = await response.json()
      setAnalysisResults(results)
      setIsProcessing(false)
    } catch (error) {
      console.error('Error analyzing file:', error)
      alert(`Failed to analyze file. Make sure the Python backend is running on ${API_URL}`)
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setUploadedData(null)
    setAnalysisResults(null)
  }

  return (
    <main className="min-h-screen p-4 md:p-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
            Marketing & Sales Analytics
          </h1>
          <p className="text-xl text-gray-700 drop-shadow-md" style={{ textShadow: '0 1px 5px rgba(255,255,255,0.6)' }}>
            Powered by Advanced ML, DL & Quantum Algorithms
          </p>
        </div>

        <FileUpload onUpload={handleFileUpload} isProcessing={isProcessing} />

        {analysisResults ? (
          <div>
            <button
              onClick={handleReset}
              className="mb-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              ← Back to Dashboard
            </button>
            <AnalysisResults results={analysisResults} />
          </div>
        ) : (
          <Dashboard sampleData={sampleData} />
        )}
        
        <footer className="mt-12 pt-8 pb-4 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Created by <span className="font-semibold text-gray-800">Siddharth Jena</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Email: <a href="mailto:siddharthjena412@gmail.com" className="hover:text-blue-600 transition-colors">siddharthjena412@gmail.com</a> | 
            Phone: <a href="tel:973-204-0395" className="hover:text-blue-600 transition-colors">973-204-0395</a>
          </p>
        </footer>
      </div>
    </main>
  )
}

