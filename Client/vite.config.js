import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// Export configuration using ESM syntax
export default defineConfig({
	build: {
		outDir: "build",
	},
	plugins: [react(), nodePolyfills()],
});
