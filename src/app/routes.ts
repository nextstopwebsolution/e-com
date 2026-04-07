"use client";

import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AddProduct } from './pages/admin/AddProduct';
import { ProductsManager } from './pages/admin/ProductsManager';
import { OrdersManager } from './pages/admin/OrdersManager';
import { UsersManager } from './pages/admin/UsersManager';
import { CategoriesManager } from './pages/admin/CategoriesManager';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/products',
    Component: Products,
  },
  {
    path: '/product/:id',
    Component: ProductDetail,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/cart',
    Component: Cart,
  },
  {
    path: '/checkout',
    Component: Checkout,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/admin',
    Component: AdminDashboard,
  },
  {
    path: '/admin/products',
    Component: ProductsManager,
  },
  {
    path: '/admin/add-product',
    Component: AddProduct,
  },
  {
    path: '/admin/orders',
    Component: OrdersManager,
  },
  {
    path: '/admin/users',
    Component: UsersManager,
  },
  {
    path: '/admin/categories',
    Component: CategoriesManager,
  },
  {
    path: '/admin/settings',
    Component: AdminDashboard,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);