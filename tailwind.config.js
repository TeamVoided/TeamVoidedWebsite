/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg': '#000000',
                'secondary': '#ffffff',
                'primary': '#ffffff',
                'accent': '#ffffff',
                'text': '#DDD6FE',
            }
        }
    },
    plugins: [],
}

