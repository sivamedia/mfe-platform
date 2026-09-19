import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'shell',

      remotes: {
        //products: 'http://localhost:3001/assets/remoteEntry.js',
        //orders: 'http://localhost:3002/assets/remoteEntry.js',
        //users: 'http://localhost:3003/assets/remoteEntry.js',
          products: env.VITE_PRODUCTS_REMOTE,
          orders: env.VITE_ORDERS_REMOTE,
          users: env.VITE_USERS_REMOTE,
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  build: {
    target: 'esnext',
  },

  server: {
    port: 3000,
  },
});