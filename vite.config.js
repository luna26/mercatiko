import { resolve, basename } from "path";
import glob from "glob";

export default {
  root: ".",
  build: {
    outDir: "assets",
    emptyOutDir: false,
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("src/**/*.{js,scss}").map((file) => {
          // Obtener solo el nombre del archivo sin extensión
          const name = basename(file).replace(/\.(js|scss)$/, "");
          return [name, resolve(__dirname, file)];
        })
      ),

      treeshake: false,
      preserveEntrySignatures: "strict",

      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].css",
      },
    },
  },
};
