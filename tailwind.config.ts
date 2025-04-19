
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
				background: '#000000',
				foreground: '#FFFFFF',
				primary: {
					DEFAULT: '#9b87f5', // Primary Purple
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#7E69AB', // Secondary Purple
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#D946EF', // Magenta Pink
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#F97316', // Bright Orange
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#8E9196', // Neutral Gray
					foreground: '#FFFFFF'
				},
				paper: {
					'50': '#D6BCFA', // Light Purple
					'100': '#8B5CF6', // Vivid Purple
					'200': '#0EA5E9', // Ocean Blue
					'300': '#1EAEDB', // Bright Blue
					'400': '#33C3F0', // Sky Blue
					'500': '#FFFFFF', // White
					'600': '#D6BCFA', // Light Purple
					'700': '#8B5CF6', // Vivid Purple
					'800': '#0EA5E9', // Ocean Blue
					'900': '#1EAEDB', // Bright Blue
					'950': '#33C3F0', // Sky Blue
				},
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
