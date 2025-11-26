@echo off
echo ========================================
echo Marketing & Sales Analytics Dashboard
echo ========================================
echo.

echo Starting Python Backend...
start "Backend Server" cmd /k "cd backend && python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload"

timeout /t 3 /nobreak >nul

echo Starting Frontend...
start "Frontend Server" cmd /k "npm run dev"

timeout /t 5 /nobreak >nul

echo.
echo ========================================
echo Servers are starting!
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.
echo Press any key to open the dashboard in your browser...
pause >nul

start http://localhost:3000

