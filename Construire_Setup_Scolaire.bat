@echo off
chcp 65001 > nul
title EDUMIND Scolaire - بناء ملف التثبيت التنفيذي EXE
cd /d "%~dp0"

echo ========================================================
echo     EDUMIND Scolaire — بناء ملف التثبيت التنفيذي EXE
echo ========================================================
echo.
node build_setup.js
echo.
pause
