import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		babel({ presets: [reactCompilerPreset()] })
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		sourcemap: true
	},
	server: {
		host: true, // слушать на 0.0.0.0, а не только localhost — иначе туннель не достучится
		allowedHosts: true // разрешить любые хосты (в т.ч. случайные *.trycloudflare.com); можно указать конкретный домен строкой/массивом вместо true
	}
})
