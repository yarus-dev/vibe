import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { dependencies } from "./package.json";

const BUILD_DIR = ".build";
const ASSETS_DIR = "~";

const MANUAL_CHUNKS = {
  react: ["react", "react-dom"],
  router: ["react-router-dom"],
};

const DEPENDENCIES_CHUNKS = Object.keys(dependencies)
  .filter((dep) => !["react", "react-dom", "react-router-dom"].includes(dep))
  .reduce((chunks, dep) => {
    const name = dep
      .split("-")
      .map((part, index) =>
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
      )
      .join("");
    chunks[name] = [dep];
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
    build: {
      outDir: BUILD_DIR,
      assetsDir: ASSETS_DIR,
      emptyOutDir: true,
      manifest: ASSETS_DIR + "/manifest.json",
      rollupOptions: {
        output: {
          manualChunks: {
            ...MANUAL_CHUNKS,
            ...DEPENDENCIES_CHUNKS,
          },
        },
      },
    },
    optimizeDeps: {
      include: ["esm-dep > cjs-dep"],
    },
  };
});
