import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";

export default defineConfig({
  plugins: [reactPlugin(), macrosPlugin()],
});
