import { defineConfig } from 'tsup';
 
export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    dts: false,
    splitting: false,
    sourcemap: 'inline',
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
});