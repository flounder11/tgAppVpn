import { Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
				tektur: ['Tektur', 'sans-serif'],
				mozilla: ['"Mozilla Headline"', 'sans-serif']
			}
		}
	}
} satisfies Config
