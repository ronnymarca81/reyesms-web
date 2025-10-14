import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import path from 'path';
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  define: {
    __RECAPTCHA_SITE_KEY__: JSON.stringify(process.env.VITE_RECAPTCHA_SITE_KEY || '')
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    target: 'esnext',
  },
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@routing': path.resolve(__dirname, 'src/routing'),
      '@myTypes': path.resolve(__dirname, 'src/myTypes'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
});



