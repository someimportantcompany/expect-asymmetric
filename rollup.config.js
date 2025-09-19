import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

export default [
  {
    input: 'src/index.ts',
    external: (id) => typeof id === 'string' && !/^[./]/.test(id),
    plugins: [esbuild()],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
      },
    ],
  },
  {
    input: 'src/index.ts',
    external: (id) => typeof id === 'string' && !/^[./]/.test(id),
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  },
];
