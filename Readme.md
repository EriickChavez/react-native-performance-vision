¡Claro, bro! 🔥  

Aquí tienes el **`README.md` en inglés**, listo para **copiar y pegar directamente** en tu proyecto.  
Sin comentarios, sin formato extra. Solo el texto limpio.

---

```md
# react-native-performance-vision 🚀

**100% Automatic Performance Tracker for React Native**  

No need to modify your components.  
Just install, initialize, and you're done:  
- Detects unnecessary re-renders  
- Shows component hierarchy: `Page → List → Item`  
- Sends real-time performance metrics  
- Works in any React Native app (CLI or Expo)

Perfect for developers who want faster apps without spending hours debugging.
```

---

## 📦 Installation

```bash
npm install react-native-performance-vision
```

## 🔧 Usage

In `App.tsx` or `index.tsx`:

```ts
import { startPerformanceTracker } from 'react-native-performance-vision';

if (__DEV__) {
  startPerformanceTracker({
    serverUrl: 'http://<your-ip>:3001', // Your machine's IP
    appName: 'MyApp' // Optional
  });
}
```

✅ That's it!  
No need to wrap components or add hooks.  
It works **automatically**.

---

## ⚙️ Requirements

Make sure your `babel.config.js` includes:

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: [
        '@babel/plugin-transform-react-jsx-source', // Required for __source
      ],
    },
  },
};
```

Install the plugin if needed:

```bash
npm install --save-dev @babel/plugin-transform-react-jsx-source
```

---

## 🖥️ Connect with rnpv-monitor (Electron App)

Use the official desktop monitor to visualize renders in real time:

👉 [rnpv-monitor](https://github.com/your-username/rnpv-monitor) (coming soon)

Features:

- Live component tree
- Render counters
- FPS & memory tracking
- AI-powered suggestions
