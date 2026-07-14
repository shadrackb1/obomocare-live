import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  const isProd = process.env.NODE_ENV === 'production' || process.env.BUILD === 'true';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: !isProd,
      minify: isProd ? 'terser' : 'esbuild',
      terserOptions: isProd
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
            format: {
              comments: /@license|@preserve/,
            },
          }
        : undefined,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            vendor: ['recharts', 'lucide-react', 'motion'],
          },
          chunkFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
          entryFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
          assetFileNames: isProd
            ? 'assets/[name]-[hash].[ext]'
            : 'assets/[name].[ext]',
        },
      },
      reportCompressedSize: !isProd,
    },
  };
});
