
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				background: '#0d1117', // GitHub dark background
				foreground: '#c9d1d9', // GitHub text color
				primary: {
					DEFAULT: '#58a6ff', // GitHub blue
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#30363d', // GitHub secondary
					foreground: '#c9d1d9'
				},
				accent: {
					DEFAULT: '#f78166', // GitHub orange accent
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#f85149', // GitHub red
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#8b949e', // GitHub muted text
					foreground: '#c9d1d9'
				},
				border: '#30363d', // GitHub border color
				paper: {
					'50': '#f0f6fc', // GitHub lightest gray
					'100': '#c9d1d9', // GitHub light gray
					'200': '#8b949e', // GitHub medium gray
					'300': '#6e7681', // GitHub medium-dark gray
					'400': '#484f58', // GitHub dark gray
					'500': '#30363d', // GitHub darker gray
					'600': '#21262d', // GitHub darkest gray
					'700': '#161b22', // GitHub near-black
					'800': '#0d1117', // GitHub background
					'900': '#010409', // GitHub pure black
					'950': '#010409', // GitHub pure black (same as 900)
				},
			},
			fontFamily: {
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace'
				],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
