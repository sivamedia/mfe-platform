import { lazy } from 'react';

export const Products = lazy(() => import('products/Products'));
export const Orders = lazy(() => import('orders/Orders'));
export const Users = lazy(() => import('users/Users'));