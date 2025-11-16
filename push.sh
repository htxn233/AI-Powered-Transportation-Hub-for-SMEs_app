#!/bin/bash
# Quick Git Push Script for Shipper App

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}════════════════════════════════════════${NC}"
echo -e "${BLUE}  AI Transport Center - Git Push Tool${NC}"
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Git not initialized. Initializing...${NC}"
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
    echo ""
fi

# Check if remote is added
if ! git remote get-url origin &> /dev/null; then
    echo -e "${YELLOW}⚠️  No remote repository found${NC}"
    echo -e "${YELLOW}Please add your GitHub repository:${NC}"
    echo ""
    echo "git remote add origin <your-github-repo-url>"
    echo ""
    exit 1
fi

echo -e "${BLUE}Checking project status...${NC}"
echo ""

# Show current status
git status

echo ""
echo -e "${BLUE}────────────────────────────────────────${NC}"
echo ""

# Ask for commit message
read -p "Enter commit message (or press Enter for default): " commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="Update: Shipper app improvements"
fi

echo ""
echo -e "${YELLOW}Preparing to commit with message:${NC}"
echo -e "${BLUE}  \"$commit_msg\"${NC}"
echo ""

# Stage all changes
echo -e "${BLUE}📦 Staging files...${NC}"
git add .
echo -e "${GREEN}✓ Files staged${NC}"

# Commit changes
echo -e "${BLUE}📝 Creating commit...${NC}"
git commit -m "$commit_msg"
commit_status=$?

if [ $commit_status -ne 0 ]; then
    echo -e "${RED}✗ Commit failed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Commit created${NC}"

# Push changes
echo ""
echo -e "${BLUE}🚀 Pushing to GitHub...${NC}"
git push origin main
push_status=$?

if [ $push_status -ne 0 ]; then
    echo -e "${RED}✗ Push failed${NC}"
    echo -e "${YELLOW}Try pushing manually:${NC}"
    echo "git push origin main"
    exit 1
fi

echo ""
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Success! Code pushed to GitHub${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo ""

# Show commit info
echo -e "${BLUE}Commit Info:${NC}"
git log --oneline -n 1
echo ""
