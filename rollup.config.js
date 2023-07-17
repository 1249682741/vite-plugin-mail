import { defineConfig } from 'rollup'
import { resolve } from 'node:path'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'

export default defineConfig([
  {
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
    plugins: [terser(), typescript()],
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: resolve('./dist/index.d.ts'),
        format: 'es'
      }
    ],
    plugins: [dts.default()]
  }
])
