@echo off
echo Starting Marketing & Sales Analytics Dashboard...
echo.
echo Starting Python Backend...
start cmd /k "python start_backend.py"
timeout /t 3 /nobreak >nul
echo.
echo Starting Frontend (Next.js)...
start cmd /k "npm run dev"
echo.
echo Both servers are starting!
echo Backend: http://localhost:8000
echo Frontend: http://localhost:3000
pause

