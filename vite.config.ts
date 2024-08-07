import { build, defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
    },
  };
});
