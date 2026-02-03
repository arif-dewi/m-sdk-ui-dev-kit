import { defineConfig } from 'vite'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/styles.scss'),
      formats: ['es'],
    },
    outDir: resolve(__dirname, 'dist-css'),
    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        assetFileNames: 'styles.css',
      },
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // Add load paths for @mdk/* resolution
        loadPaths: [resolve(__dirname, '../')],
      },
    },
  },
  resolve: {
    alias: {
      '@mdk/core': resolve(__dirname, '../core/src'),
      '@mdk/theme': resolve(__dirname, '../theme/src'),
    },
  },
  plugins: [
    {
      name: 'copy-css-to-src',
      writeBundle() {
        const srcCss = resolve(__dirname, 'dist-css/styles.css')
        const srcMap = resolve(__dirname, 'dist-css/styles.css.map')
        const destCss = resolve(__dirname, 'src/styles.css')
        const destMap = resolve(__dirname, 'src/styles.css.map')
        try {
          mkdirSync(dirname(destCss), { recursive: true })
          copyFileSync(srcCss, destCss)
          if (existsSync(srcMap)) {
            copyFileSync(srcMap, destMap)
            // eslint-disable-next-line no-console
            console.log('✓ Copied styles.css and source map to src/')
          } else {
            // eslint-disable-next-line no-console
            console.log('✓ Copied styles.css to src/ (no source map generated)')
          }
        } catch (error) {
          console.error('Failed to copy CSS:', error)
        }
      },
    },
  ],
}))
