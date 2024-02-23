import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { dependencies, version } from "./package.json";

const renderChunks = (deps) =>
  Object.keys(deps)
    .filter((dep) => !["react", "react-dom", "vite"].includes(dep))
    .reduce((chunks, dep) => {
      chunks[dep] = [dep];
      return chunks;
    }, {});

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [react()],
    define: {
      __ROOT_ID__: JSON.stringify("🪄"),
      __VERSION__: JSON.stringify(version),
      __API_URL__: "window.__backend_api_url",
      __ENV__: JSON.stringify(env.NODE_ENV),
    },
    build: {
      outDir: ".build",
      assetsDir: "~",
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            ...renderChunks(dependencies),
          },
        },
      },
    },
  };
});
