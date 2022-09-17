
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
const dist = 'dist'
const production=!process.env.ROLLUP_WATCH
export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm'
    },
    {
      file: `${dist}/bundle.umd.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  plugin: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    production && terser()
  ]
}
