import { resolve } from 'node:path';
import { readdirSync, statSync } from 'node:fs';

function collectHtmlEntries(rootDir) {
  const entries = {};
  function walk(dir) {
    for (const item of readdirSync(dir)) {
      const full = resolve(dir, item);
      const st = statSync(full);
      if (st.isDirectory()) walk(full);
      else if (item === 'index.html') {
        const rel = full.replace(rootDir, '').replace(/\\/g, '/');
        const key = rel.replace(/^\//, '').replace(/\/index\.html$/, '') || 'index';
        entries[key] = full;
      }
    }
  }
  walk(rootDir);
  return entries;
}

const root = resolve(process.cwd(), 'src');
const input = collectHtmlEntries(root);

export default {
  root,
  publicDir: resolve(process.cwd(), 'public'),
  resolve: { alias: { '@': resolve(process.cwd(), 'src') } },
  server: {
    port: 5173,
    open: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: { input },
    outDir: 'dist',
    emptyOutDir: true,
  },
};
