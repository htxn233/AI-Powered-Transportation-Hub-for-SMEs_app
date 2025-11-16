# 🚀 Quick Start Guide - AI Transport Center Shipper App

## ⚡ Quick Installation (5 minutes)

```bash
# 1. Navigate to project
cd shipper-app

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the app
npx expo start
```

## 📱 How to Run

After `npx expo start`, you'll see options in the terminal:

| Command | What it does |
|---------|-------------|
| `a` | Open in Android Emulator |
| `i` | Open in iOS Simulator (Mac only) |
| `w` | Open in Web Browser |
| `j` | Open Debugger |
| `r` | Reload App |
| Scan QR | Use Expo Go app on phone |

## 🎯 Most Common: Use Expo Go on Phone

1. Install "Expo Go" app on your phone
2. Run: `npx expo start`
3. Scan QR code with your phone camera or Expo Go app
4. Done! 🎉

## 🌐 Use Web Browser

```bash
npx expo start
# Press 'w' when the Metro bundler starts
# or visit http://localhost:8082
```

## 📂 Project Structure Quick View

```
app/                    ← Screens (routing)
├── index.tsx          ← Welcome screen
├── (tabs)/            ← Tab navigation
│   ├── pickup.tsx
│   ├── delivery.tsx
│   ├── scan.tsx
│   └── profile.tsx
└── [id].tsx files     ← Detail screens

components/            ← Reusable components
lib/                   ← Utilities & types
```

## 🔧 Common Issues & Fixes

### ❌ "Cannot find module 'expo-router'"
```bash
npm install --legacy-peer-deps
```

### ❌ "Port 8081 is already in use"
Just press `y` when asked - it will use port 8082

### ❌ "Metro not connecting"
```bash
# Kill old processes and restart
npx expo start --clear
```

### ❌ "Blank white screen"
- Try reloading: Press `r` in terminal
- Check console for errors: Press `j` for debugger

## 📝 Key Files to Know

- `app.json` - App configuration
- `metro.config.js` - NativeWind configuration
- `tailwind.config.js` - Tailwind colors
- `tsconfig.json` - TypeScript settings
- `package.json` - Dependencies

## 🎨 Customizing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#2563EB',      // Change this for main color
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
}
```

## 💾 Pushing to GitHub

See `GIT_SETUP.md` for detailed instructions

Quick version:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## 📚 Full Documentation

See `README.md` for complete setup and troubleshooting

## ✅ Checklist Before Running

- [ ] Node.js v16+ installed
- [ ] Ran `npm install --legacy-peer-deps`
- [ ] No errors in terminal
- [ ] Latest Expo Go app (if using phone)

## 🎓 Learn More

- [Expo Docs](https://docs.expo.dev/)
- [React Native Guide](https://reactnative.dev/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**That's it! You're ready to develop.** 🚀
