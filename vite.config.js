import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css',
                'resources/js/app.jsx',
                'resources/js/components/pages/SellPage.tsx',
                'resources/js/components/pages/AboutPage.tsx',
                'resources/js/components/pages/BuyPage.tsx',
                'resources/js/components/pages/ContactUsPage.tsx',
                'resources/js/components/pages/FAQManagerPage.tsx',
                'resources/js/components/pages/LoginPage.tsx',
                'resources/js/components/pages/MainPage.tsx',
                'resources/js/components/pages/ManagerPage.tsx',
                'resources/js/components/pages/MortgageCalculatorPage.tsx',
                'resources/js/components/pages/TestimonialPage.tsx'],
            refresh: true,
        }),
        react(),
    ],
});
