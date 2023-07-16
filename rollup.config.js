import { defineConfig } from 'rollup'
import { resolve } from 'node:path'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: resolve('./dist/index.cjs'),
      format: 'cjs',
    },
    {
      file: resolve('./dist/index.mjs'),
      format: 'es',
    },
  ],
  plugins: [typescript()],
})
