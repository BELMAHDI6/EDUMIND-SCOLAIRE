@echo off
chcp 65001 > nul
title EDUMIND Scolaire - إنشاء تحديث تلقائي Cloud Patch
cd /d "%~dp0"

echo ========================================================
echo   EDUMIND Scolaire — إنشاء حزمة تحديث سحابية تلقائية
echo ========================================================
echo.
node build-patch.js
echo.
pause
