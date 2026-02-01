export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
        animation: {
        float1: "float 2s ease-in-out infinite",
        float2: "float 1s ease-in-out infinite",
        float3: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
      },
      colors: {
        lightBg: "#f8fafc",
        darkBg: "#020617",
      },
    },
  },
  plugins: [],
};
