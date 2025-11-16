# 🚀 Deployment Guide

## 📦 Building for Production

### Prerequisites

- Expo Account (free at [expo.dev](https://expo.dev))
- EAS CLI installed: `npm install -g eas-cli`
- Logged in to Expo: `eas login`

## 🔨 Build APK (Android)

### Method 1: Using EAS (Recommended)

```bash
# Configure EAS (first time only)
eas build:configure

# Build APK
eas build --platform android --type apk

# Or build for Google Play
eas build --platform android --type app-bundle
```

Build will be available at the provided URL or in Expo dashboard.

### Method 2: Using `expo build` (Legacy)

```bash
expo build:android
```

## 🍎 Build IPA (iOS)

### Using EAS

```bash
eas build --platform ios

# Or submit directly to App Store
eas submit --platform ios
```

Requires:
- Apple Developer Account ($99/year)
- Mac with Xcode

## 🌐 Web Deployment

### Build Static Files

```bash
npx expo export --platform web
```

Outputs to `dist/` folder.

### Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
# Build first
npx expo export --platform web

# Deploy
netlify deploy --prod --dir=dist
```

## 📋 Pre-Deployment Checklist

- [ ] Update version in `app.json`
  ```json
  {
    "expo": {
      "version": "1.0.0"
    }
  }
  ```

- [ ] Update `versionCode` for Android
  ```json
  {
    "expo": {
      "android": {
        "versionCode": 1
      }
    }
  }
  ```

- [ ] Test thoroughly:
  ```bash
  npm install --legacy-peer-deps
  npx expo start
  # Test all screens and functionality
  ```

- [ ] Check TypeScript compilation:
  ```bash
  npx tsc --noEmit
  ```

- [ ] Clear cache before build:
  ```bash
  npx expo prebuild --clean
  ```

## 🔐 Environment Variables

Create `.env` file (not committed to git):

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production
```

Access in code:
```typescript
const apiUrl = process.env.REACT_APP_API_URL;
```

## 📝 Version Management

### Semantic Versioning Format: `MAJOR.MINOR.PATCH`

- `MAJOR`: Breaking changes
- `MINOR`: New features
- `PATCH`: Bug fixes

Example: `1.2.3`

Update in `app.json`:
```json
{
  "expo": {
    "version": "1.2.3",
    "android": {
      "versionCode": 123
    }
  }
}
```

## 🚀 Deploy to Google Play Store

```bash
# 1. Create signing key (first time)
eas build:configure

# 2. Build Android
eas build --platform android

# 3. Submit to Play Store
eas submit --platform android
```

Requires:
- Google Play Developer Account ($25 one-time)
- Signing certificates

## 🍎 Deploy to Apple App Store

```bash
# 1. Build iOS
eas build --platform ios

# 2. Submit to App Store
eas submit --platform ios
```

Requires:
- Apple Developer Account ($99/year)
- Provisioning profiles

## 📊 Monitor Builds

```bash
# View build history
eas build:list

# View build details
eas build:view <BUILD_ID>

# View submission status
eas submit:list
```

## 🔄 Over-the-Air Updates

Publish updates without rebuilding:

```bash
# Update code and assets
npm install --legacy-peer-deps

# Publish
eas update

# Users get update when they restart app
```

## 📱 App Store Icons & Splash Screen

Add to `app.json`:

```json
{
  "expo": {
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTabletMode": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    }
  }
}
```

## 🐛 Debugging Production Builds

```bash
# View production logs
eas build:view <BUILD_ID> --logs

# Test production build locally
eas build --local --platform android
```

## 📞 Support

- [Expo Docs](https://docs.expo.dev/)
- [EAS Docs](https://docs.expo.dev/eas/)
- [Troubleshooting](https://docs.expo.dev/troubleshooting/build-errors/)

---

**Ready to deploy? Start with the Pre-Deployment Checklist above!** 🎉
