import {defineConfig} from 'vite'
import laravel from 'laravel-vite-plugin'
import fs from 'fs'

export default defineConfig({
	plugins: [
		laravel({
			buildDirectory: 'build/two',
			input: ['resources/two/css/app.css', 'resources/two/js/app.js'],
			refresh: true,
		}),
	],

	server: {
		port: 3003,
		hmr: {
			host: 'poc-two-vite.local'
		},
		https: {
			key: fs.readFileSync('/home/ddeboer/minica/poc-two-vite.local/key.pem'),
			cert: fs.readFileSync('/home/ddeboer/minica/poc-two-vite.local/cert.pem'),
		},
	}
})
