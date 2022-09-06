"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vite_config_ts = exports.vite_config_js = void 0;
exports.vite_config_js = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr({ exportAsDefault: true })],
})
`;
exports.vite_config_ts = `import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr({ exportAsDefault: true })],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
`;
