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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
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
				},
				'aurora-pulse': {
					'0%': { boxShadow: 'var(--shadow-aurora)' },
					'100%': { boxShadow: 'var(--shadow-intense)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(2deg)' },
					'66%': { transform: 'translateY(-10px) rotate(-2deg)' }
				},
				'logo-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.6))'
					},
					'50%': { 
						transform: 'scale(1.05)',
						filter: 'drop-shadow(0 0 40px hsl(var(--primary) / 0.8))'
					}
				},
				'ripple': {
					'0%': { width: '0', height: '0', opacity: '1' },
					'100%': { width: '300px', height: '300px', opacity: '0' }
				},
				'slide-up': {
					'from': { opacity: '0', transform: 'translateY(50px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'from': { opacity: '0' },
					'to': { opacity: '1' }
				},
				'spin-wheel': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.8)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'aurora-pulse': 'aurora-pulse 3s ease-in-out infinite alternate',
				'float': 'float 6s ease-in-out infinite',
				'logo-pulse': 'logo-pulse 2s ease-in-out infinite',
				'ripple': 'ripple 2s infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'spin-wheel': 'spin-wheel 3s cubic-bezier(0.23, 1, 0.320, 1)',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
