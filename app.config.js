// app.config.js
export default ({ config }) => ({
  ...config,

  extra: {
    ...config.extra,
    apiUrl: "https://yasonbackend.yasonsc.com",
  },

  plugins: [
  // All other plugins
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/yasonwelcome.png",
        imageWidth: 150,
        resizeMode: "contain",
        backgroundColor: "#445399",
      },
    ],
    [
      "@maplibre/maplibre-react-native"
    ],
    "expo-build-properties",
    "expo-dev-client"
  ],
});
