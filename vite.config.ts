import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        checker({
            typescript: true,
            terminal: true,
            eslint: {
                dev: {
                    logLevel: ["warning", "error"]
                },
                lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx,css,md,json}"'
            },
            overlay: true
        }),
        macrosPlugin(),
        VitePWA()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    build: {
        outDir: path.resolve(__dirname, "..", "./server/public")
    },
    preview: {
        port: 3000,
        open: true
    },
    server: {
        host: true,
        port: 3000,
        open: true
    }
});

