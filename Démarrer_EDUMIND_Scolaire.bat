@echo off
chcp 65001 > nul
title EDUMIND Scolaire - تسيير المتوسطات والثانويات
cd /d "%~dp0"

echo ========================================================
echo     EDUMIND Scolaire — تسيير المتوسطات والثانويات العمومية
echo ========================================================
echo.
echo جار تشغيل الخادم على المنفذ 3001...
echo.

start "" http://localhost:3001
node server.js

pause
