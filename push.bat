@echo off
REM Git Push Script for Windows
REM AI Transport Center - Shipper App

setlocal enabledelayedexpansion

echo.
echo ======================================
echo   AI Transport Center - Git Push
echo ======================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo Git initialized.
    echo.
)

REM Check if remote is added
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo No remote repository found.
    echo Please add your GitHub repository:
    echo.
    echo git remote add origin [your-github-repo-url]
    echo.
    pause
    exit /b 1
)

echo Checking project status...
echo.
git status

echo.
echo ======================================
echo.

REM Ask for commit message
set /p commit_msg="Enter commit message (default: Update Shipper App): "

if "!commit_msg!"=="" (
    set commit_msg=Update: Shipper app improvements
)

echo.
echo Preparing to commit:
echo   "!commit_msg!"
echo.

REM Stage all changes
echo Staging files...
git add .
if errorlevel 1 (
    echo Failed to stage files
    pause
    exit /b 1
)
echo Files staged.

REM Commit changes
echo Creating commit...
git commit -m "!commit_msg!"
if errorlevel 1 (
    echo Commit failed
    pause
    exit /b 1
)
echo Commit created.

echo.
echo Pushing to GitHub...
git push origin main
if errorlevel 1 (
    echo Push failed. Try manually:
    echo   git push origin main
    pause
    exit /b 1
)

echo.
echo ======================================
echo Success! Code pushed to GitHub
echo ======================================
echo.

REM Show commit info
echo Latest commit:
git log --oneline -n 1
echo.

pause
