'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface FileUploadProps {
  onUpload: (file: File) => void
  isProcessing?: boolean
}

export default function FileUpload({ onUpload, isProcessing = false }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase()
    
    if (extension !== 'csv' && extension !== 'xlsx' && extension !== 'xls') {
      alert('Please upload a CSV or Excel file')
      return
    }
    
    onUpload(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
          transition-all duration-300
          ${isDragging 
            ? 'border-yellow-300 bg-yellow-200/40 scale-105 shadow-2xl' 
            : 'border-blue-200 bg-gradient-to-br from-blue-100/30 via-yellow-100/30 to-white/40 hover:from-blue-200/40 hover:via-yellow-200/40 hover:to-white/50 hover:shadow-xl'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileInput}
          className="hidden"
          disabled={isProcessing}
        />
        
        {isProcessing ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-800 text-lg font-semibold">Processing your file...</p>
          </div>
        ) : (
          <>
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Upload Your Marketing & Sales Data
            </h3>
            <p className="text-gray-700 mb-4">
              Drag and drop your CSV or Excel file here, or click to browse
            </p>
            <p className="text-sm text-gray-600">
              Supported formats: .csv, .xlsx, .xls
            </p>
          </>
        )}
      </div>
    </motion.div>
  )
}

