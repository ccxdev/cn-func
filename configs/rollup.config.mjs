// @ts-check

import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import { dts } from "rollup-plugin-dts";

import pkg from "../package.json" assert { type: "json" };

export default defineConfig([
  {
    input: pkg.source,
    output: [
      getOutputConfig({
        file: pkg.exports["."].import,
        format: "esm",
        targets: "> 0.5%, last 2 versions, Firefox ESR, not dead, maintained node versions",
      }),
      getOutputConfig({
        file: pkg.exports["."].require,
        format: "cjs",
        targets: "> 0.5%, last 2 versions, Firefox ESR, not dead, maintained node versions",
      }),
    ],
    external: /node_modules/,
    plugins: [
      del({ targets: "dist/*" }),
      nodeResolve(),
      typescript({
        compilerOptions: {
          noEmitOnError: true,
        },
      }),
    ],
  },
  {
    input: pkg.source,
    output: [
      getOutputConfig({
        file: pkg.exports["./es5"].import,
        format: "esm",
        targets: "supports es5",
      }),
      getOutputConfig({
        file: pkg.exports["./es5"].require,
        format: "cjs",
        targets: "supports es5",
      }),
    ],
    external: /node_modules/,
    plugins: [
      nodeResolve(),
      typescript({
        compilerOptions: {
          noEmitOnError: true,
          declaration: false,
          declarationMap: false,
        },
      }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: {
      file: pkg.exports["."].types,
      format: "esm",
    },
    plugins: [
      dts(),
      del({
        targets: "dist/types",
        hook: "buildEnd",
        runOnce: true,
      }),
    ],
  },
]);

function getOutputConfig({ file, format, targets }) {
  /** @type {import('rollup').OutputOptions} */
  const config = {
    file,
    format,
    sourcemap: true,
    freeze: false,
    generatedCode: "es2015",
    plugins: [
      getBabelOutputPlugin({
        presets: [
          [
            "@babel/preset-env",
            {
              loose: true,
              bugfixes: true,
              modules: false,
              targets,
            },
          ],
        ],
      }),
    ],
  };

  return config;
}
