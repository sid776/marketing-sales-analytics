#!/bin/bash
echo "Starting Marketing & Sales Analytics Dashboard..."
echo ""
echo "Starting Python Backend..."
python start_backend.py &
sleep 3
echo ""
echo "Starting Frontend (Next.js)..."
npm run dev &
echo ""
echo "Both servers are starting!"
echo "Backend: http://localhost:8000"
echo "Frontend: http://localhost:3000"

