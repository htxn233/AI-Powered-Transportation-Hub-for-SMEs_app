# AI Transport Center - Shipper App

A React Native mobile application for managing delivery and pickup tasks using Expo. Built with TypeScript, NativeWind for styling, and Lucide React Native icons.

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Expo CLI** (optional but recommended)
  ```bash
  npm install -g expo-cli
  ```

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd shipper-app
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

**Note:** We use `--legacy-peer-deps` flag to resolve peer dependency conflicts with Expo and React Native.

### 3. Verify Installation

Check that all packages are installed correctly:

```bash
npm ls expo react-native
```

## 🏃 Running the Project

### Start the Development Server

```bash
npx expo start
```

This will start the Metro bundler and display a QR code.

### Run on Different Platforms

#### Option 1: Expo Go (Mobile Device)

1. Install **Expo Go** app on your phone:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Scan the QR code from the terminal with your phone's camera or Expo Go app

#### Option 2: Android Emulator

```bash
# From the running expo server, press 'a' or:
npx expo start --android
```

Requires Android Studio and an emulator set up.

#### Option 3: iOS Simulator (macOS only)

```bash
# From the running expo server, press 'i' or:
npx expo start --ios
```

Requires Xcode and iOS Simulator.

#### Option 4: Web Browser

```bash
# From the running expo server, press 'w' or:
npx expo start --web
```

Opens at `http://localhost:8082`

## 📁 Project Structure

```
shipper-app/
├── app/                          # App screens and routing
│   ├── _layout.tsx              # Root layout
│   ├── index.tsx                # Home screen
│   ├── login.tsx                # Welcome screen
│   ├── (tabs)/                  # Tab-based screens
│   │   ├── _layout.tsx
│   │   ├── pickup.tsx
│   │   ├── delivery.tsx
│   │   ├── scan.tsx
│   │   └── profile.tsx
│   ├── delivery/[id].tsx        # Delivery detail screen
│   ├── pickup/[id].tsx          # Pickup detail screen
│   ├── history/index.tsx        # Delivery history
│   ├── schedule/index.tsx       # Work schedule
│   └── settings/index.tsx       # Setiing profile
├── components/                   # Reusable UI components
│   ├── ActionButton.tsx
│   ├── OrderCard.tsx
│   ├── StatusBadge.tsx
│   ├── ShiftCard.tsx
│   ├── TimelineItem.tsx
│   ├── SectionHeader.tsx
│   ├── ScanConfirmItem.tsx
│   └── ScanConfirmModal.tsx
├── lib/                          # Utilities and types
│   ├── types.ts                 # TypeScript type definitions
│   └── mockOrders.ts            # Mock data
├── assets/                       # Images and static files
├── app.json                      # Expo app configuration
├── metro.config.js              # Metro bundler configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🎨 Styling

This project uses **NativeWind** v2.0.11 which provides Tailwind CSS utility classes for React Native.

All components use inline `style` props instead of `className` for React Native compatibility.

### Color Scheme

- **Primary**: `#2563EB` (Blue)
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Danger**: `#EF4444` (Red)
- **Gray**: Various shades for UI elements

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `expo` | ~51.0.0 | Expo framework |
| `expo-router` | ~3.5.0 | File-based routing |
| `react-native` | 0.74.0 | React Native framework |
| `react` | 18.2.0 | React library |
| `typescript` | ^5.1.3 | TypeScript support |
| `nativewind` | ^2.0.11 | Tailwind CSS for React Native |
| `lucide-react-native` | ^0.263.0 | Icon library |
| `react-native-svg` | ^15.15.0 | SVG support |
| `react-native-web` | ~0.19.10 | Web platform support |

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## 🐛 Troubleshooting

### Issue: "Cannot find module 'expo-router'"

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Issue: "Metro waiting but not connecting"

**Solution:**
- Make sure Metro is running: `npx expo start`
- Check that your device is on the same network as your computer
- Try clearing the Metro cache: `npx expo start --clear`

### Issue: "Port 8081 is already in use"

**Solution:** The app will automatically switch to port 8082. If you need a specific port:
```bash
npx expo start --port 8083
```

### Issue: Web bundle fails with missing dependencies

**Solution:** Install web dependencies:
```bash
npm install react-native-web@~0.19.10 react-dom@18.2.0 --legacy-peer-deps
```

### Issue: TypeScript errors about className

**Solution:** All components should use inline `style` props instead of `className`. React Native doesn't support CSS classes directly.

## 📝 Features

- ✅ Pickup and Delivery task management
- ✅ Real-time delivery tracking with timeline
- ✅ QR code scanning for package confirmation
- ✅ Work schedule management
- ✅ Delivery history and statistics
- ✅ User profile with performance metrics
- ✅ Responsive UI for mobile and web

## 🚀 Building for Production

### Android APK

```bash
eas build --platform android
```

### iOS IPA

```bash
eas build --platform ios
```

For more details, see [Expo EAS Build Documentation](https://docs.expo.dev/build/introduction/)

## 📖 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://expo.github.io/router)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 👨‍💻 Development Tips

### Hot Reload

The app supports hot reloading. Any changes you make to the code will automatically refresh the app without losing state.

### Debug Mode

Press `j` in the terminal running `expo start` to open the debugger.

### View Logs

Logs will appear in:
- Terminal for Metro bundler
- Browser console for web
- Expo Go console for mobile

## 📄 License

This project is developed for TDTU (Ton Duc Thang University).

## 👥 Contributors

- Your Name / Team Name

---

**Last Updated:** November 17, 2025

For questions or issues, please create an issue in the repository.
