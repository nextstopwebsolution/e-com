// Mock data for the e-commerce website

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  bestseller?: boolean;
  downloads: number;
  fileSize: string;
  fileType: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
  joined: string;
}

export interface Order {
  id: string;
  userId: string;
  products: { productId: string; quantity: number }[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

export const categories: Category[] = [
  { id: '1', name: 'UI Kits', icon: 'Layout', count: 234 },
  { id: '2', name: 'Icons', icon: 'Sparkles', count: 456 },
  { id: '3', name: 'Templates', icon: 'FileText', count: 189 },
  { id: '4', name: 'Fonts', icon: 'Type', count: 123 },
  { id: '5', name: 'Graphics', icon: 'Palette', count: 345 },
  { id: '6', name: '3D Assets', icon: 'Box', count: 167 },
  { id: '7', name: 'Mockups', icon: 'Monitor', count: 234 },
  { id: '8', name: 'Illustrations', icon: 'Pen', count: 278 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Cyber Dashboard UI Kit',
    price: 49.99,
    category: 'UI Kits',
    description: 'A comprehensive dark-themed dashboard UI kit with 50+ screens, featuring glassmorphism design, purple gradients, and modern components. Perfect for SaaS and AI startups.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    rating: 4.8,
    reviews: 234,
    featured: true,
    bestseller: true,
    downloads: 1234,
    fileSize: '45 MB',
    fileType: 'Figma, Sketch',
  },
  {
    id: '2',
    name: 'AI Startup Landing Page',
    price: 39.99,
    category: 'Templates',
    description: 'Modern landing page template designed for AI and tech startups. Includes hero sections, feature blocks, pricing tables, and more.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    rating: 4.9,
    reviews: 189,
    featured: true,
    downloads: 987,
    fileSize: '32 MB',
    fileType: 'HTML, React',
  },
  {
    id: '3',
    name: 'Neon Icon Pack',
    price: 24.99,
    category: 'Icons',
    description: '500+ premium neon-style icons in multiple formats. Perfect for dark-themed designs and cyberpunk aesthetics.',
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80',
    rating: 4.7,
    reviews: 456,
    bestseller: true,
    downloads: 2345,
    fileSize: '18 MB',
    fileType: 'SVG, PNG',
  },
  {
    id: '4',
    name: 'Glassmorphism Components',
    price: 34.99,
    category: 'UI Kits',
    description: 'Beautiful glassmorphism UI components library with blur effects, gradients, and modern design patterns.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    rating: 4.9,
    reviews: 312,
    featured: true,
    downloads: 1567,
    fileSize: '28 MB',
    fileType: 'Figma, XD',
  },
  {
    id: '5',
    name: '3D Gradient Backgrounds',
    price: 19.99,
    category: 'Graphics',
    description: '100+ abstract 3D gradient backgrounds in high resolution. Perfect for hero sections and modern web designs.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
    rating: 4.6,
    reviews: 234,
    downloads: 3456,
    fileSize: '250 MB',
    fileType: 'JPG, PNG',
  },
  {
    id: '6',
    name: 'Cyberpunk Font Family',
    price: 29.99,
    category: 'Fonts',
    description: 'Futuristic font family with 8 weights. Ideal for tech brands, gaming, and sci-fi projects.',
    image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80',
    rating: 4.8,
    reviews: 167,
    downloads: 1890,
    fileSize: '4 MB',
    fileType: 'OTF, TTF',
  },
  {
    id: '7',
    name: 'Dashboard Mockup Pack',
    price: 44.99,
    category: 'Mockups',
    description: 'Professional dashboard mockup collection with multiple device views. Photorealistic and customizable.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    rating: 4.7,
    reviews: 145,
    downloads: 876,
    fileSize: '120 MB',
    fileType: 'PSD, Figma',
  },
  {
    id: '8',
    name: 'AI Character Illustrations',
    price: 54.99,
    category: 'Illustrations',
    description: 'Futuristic AI and robot character illustrations. Perfect for tech presentations and modern interfaces.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    rating: 4.9,
    reviews: 289,
    bestseller: true,
    downloads: 1234,
    fileSize: '65 MB',
    fileType: 'AI, SVG',
  },
  {
    id: '9',
    name: 'Minimalist App UI Kit',
    price: 39.99,
    category: 'UI Kits',
    description: 'Clean and minimalist mobile app UI kit with 40+ screens. Dark and light modes included.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    rating: 4.8,
    reviews: 198,
    downloads: 1456,
    fileSize: '38 MB',
    fileType: 'Figma, Sketch',
  },
  {
    id: '10',
    name: '3D Element Library',
    price: 64.99,
    category: '3D Assets',
    description: 'Premium 3D elements library with 200+ objects. Includes icons, shapes, and abstract forms.',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    rating: 4.9,
    reviews: 345,
    featured: true,
    downloads: 2134,
    fileSize: '180 MB',
    fileType: 'Blender, C4D',
  },
  {
    id: '11',
    name: 'Dark Mode Icon Set',
    price: 22.99,
    category: 'Icons',
    description: '300+ icons optimized for dark interfaces. Multiple styles and sizes included.',
    image: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80',
    rating: 4.7,
    reviews: 267,
    downloads: 2890,
    fileSize: '15 MB',
    fileType: 'SVG, PNG',
  },
  {
    id: '12',
    name: 'E-commerce Template Pro',
    price: 59.99,
    category: 'Templates',
    description: 'Complete e-commerce website template with product pages, checkout flow, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    rating: 4.8,
    reviews: 423,
    featured: true,
    bestseller: true,
    downloads: 1678,
    fileSize: '95 MB',
    fileType: 'HTML, React',
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    email: 'alex@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    role: 'user',
    joined: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    role: 'admin',
    joined: '2023-11-20',
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    email: 'michael@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    role: 'user',
    joined: '2024-02-10',
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    role: 'user',
    joined: '2024-03-05',
  },
];

export const orders: Order[] = [
  {
    id: 'ORD-001',
    userId: '1',
    products: [{ productId: '1', quantity: 1 }, { productId: '3', quantity: 2 }],
    total: 99.97,
    status: 'completed',
    date: '2024-03-15',
  },
  {
    id: 'ORD-002',
    userId: '3',
    products: [{ productId: '2', quantity: 1 }],
    total: 39.99,
    status: 'completed',
    date: '2024-03-16',
  },
  {
    id: 'ORD-003',
    userId: '4',
    products: [{ productId: '4', quantity: 1 }, { productId: '5', quantity: 1 }],
    total: 54.98,
    status: 'pending',
    date: '2024-03-17',
  },
  {
    id: 'ORD-004',
    userId: '1',
    products: [{ productId: '8', quantity: 1 }],
    total: 54.99,
    status: 'completed',
    date: '2024-03-18',
  },
];
