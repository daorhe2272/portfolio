import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/app.js",
  output: {
    dir: "build",
    format: "cjs",
  },
  plugins: [nodeResolve()],
};
