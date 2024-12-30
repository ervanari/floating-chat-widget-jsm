import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/widgetElement.jsx",
      name: "FloatingChatWidget",
      fileName: "floating-chat-widget",
      formats: ["es", "umd"],
    },
  },
});
