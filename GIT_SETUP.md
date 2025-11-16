# Git Setup & Push Instructions

## 🔄 First Time Setup (Initialize Git)

If the repository hasn't been initialized yet:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Shipper app with Expo, TypeScript, and NativeWind"

# Add remote repository
git remote add origin <your-github-repo-url>

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📤 Pushing Updates (After Initial Setup)

```bash
# Check status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Your commit message here"

# Push to remote
git push origin main
```

## 💾 Example Workflow

```bash
# 1. Make changes to files
# Edit src files...

# 2. Check what changed
git status

# 3. Stage changes
git add .

# 4. Commit with descriptive message
git commit -m "Fix: Resolve layout issues in profile screen"

# 5. Push to repository
git push origin main
```

## 📋 Useful Git Commands

```bash
# View commit history
git log --oneline

# View changes before committing
git diff

# View staged changes
git diff --staged

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View branches
git branch -a

# Pull latest changes from remote
git pull origin main

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch into main
git merge feature/new-feature
```

## 🔐 GitHub Setup

1. Create a new repository on GitHub
2. Copy the repository URL
3. Run: `git remote add origin <your-url>`
4. Push your code: `git push -u origin main`

## ✅ Before Pushing

Make sure:

- ✅ All files are properly formatted
- ✅ No sensitive information in code (.env files are gitignored)
- ✅ No node_modules or build artifacts (handled by .gitignore)
- ✅ Code compiles without errors: `npx tsc --noEmit`
- ✅ Meaningful commit messages

## 📝 Good Commit Messages

```
Fix: Resolve NativeWind className compatibility issues
Feature: Add QR code scanning functionality
Docs: Update README with installation instructions
Refactor: Convert all components to use inline styles
```

Format: `<Type>: <Brief description>`

Types: `Fix`, `Feature`, `Docs`, `Refactor`, `Test`, `Chore`

---

**Ready to push?** Follow the instructions above and your code will be on GitHub! 🚀
