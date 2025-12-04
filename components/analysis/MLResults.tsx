"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface MLResultsProps {
  results: any;
}

export default function MLResults({ results }: MLResultsProps) {
  const COLORS = [
    "#3b82f6",
    "#fbbf24",
    "#60a5fa",
    "#fcd34d",
    "#93c5fd",
    "#fef08a",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-effect rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🤖</span>
        <h3 className="text-2xl font-bold text-gray-800">ML Analysis</h3>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 text-sm mb-1">Model: {results.model}</p>
        <p className="text-gray-700 text-sm">
          Accuracy: {(results.accuracy * 100).toFixed(1)}%
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-gray-800 font-semibold mb-2">
            Sales Predictions
          </h4>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={results.predictions}>
              <XAxis
                dataKey="month"
                stroke="#374151"
                style={{ fontSize: "10px" }}
              />
              <YAxis stroke="#374151" style={{ fontSize: "10px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#fbbf24"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">
            Customer Classification
          </h4>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={results.classifications}
                cx="50%"
                cy="50%"
                outerRadius={50}
                dataKey="count"
                label={({ name }) => name}
              >
                {results.classifications.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">
            Top Recommendations
          </h4>
          <div className="space-y-2">
            {results.recommendations
              .slice(0, 3)
              .map((rec: any, idx: number) => (
                <div key={idx} className="bg-white/10 rounded-lg p-2">
                  <p className="text-gray-800 text-xs">{rec.action}</p>
                  <p className="text-gray-600 text-xs">Impact: {rec.impact}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
