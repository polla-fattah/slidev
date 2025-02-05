import { defineConfig } from 'vite';



export default defineConfig({
  base: '/slidev/', // Change this to match your deployment path

  build: {
    chunkSizeWarningLimit: 15000, // Increases the warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('monaco')) {
            return 'monaco-editor';
          }
        },
      },
    },
  },
});
