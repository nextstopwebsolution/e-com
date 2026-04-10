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
  { id: '1', name: 'Expert Advisor', icon: 'Layout', count: 234 },
  { id: '2', name: 'Indicator', icon: 'Sparkles', count: 456 },
  { id: '3', name: ' Group buy', icon: 'FileText', count: 189 },
  { id: '4', name: 'Pre Order', icon: 'Type', count: 123 },
  { id: '5', name: 'EA MT4', icon: 'Palette', count: 345 },
  { id: '6', name: 'EA MT5', icon: 'Box', count: 167 },
  { id: '7', name: 'Indicator MT4', icon: 'Monitor', count: 234 },
  { id: '8', name: 'Indicator MT5', icon: 'Pen', count: 278 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Trading Guide',
    price: 49.99,
    category: 'Expert Advisor',
    description: 'Comprehensive trading guide covering strategies, risk management, and market analysis. Perfect for both beginners and experienced traders.',
    image: 'https://i.pinimg.com/736x/e8/20/84/e82084fbec43943489b73db9e1d2acdb.jpg',
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
    name: 'Trading Statergy',
    price: 39.99,
    category: 'Indicator',
    description: 'Effective trading strategies for maximizing profits and minimizing risks in the financial markets.',
    image: 'https://i.pinimg.com/1200x/37/9e/1b/379e1b8baa0496efd58d819662ef1953.jpg',
    rating: 4.9,
    reviews: 189,
    featured: true,
    downloads: 987,
    fileSize: '32 MB',
    fileType: 'HTML, React',
  },
  {
    id: '3',
    name: 'Gold irendsetter EA',
    price: 24.99,
    category: 'EA MT4',
    description: 'Powerful Expert Advisor for MT4 that analyzes gold market trends and executes trades based on advanced algorithms.',
    image: 'https://i.pinimg.com/1200x/12/53/39/125339cdb522e2a9c802274128305d15.jpg',
    rating: 4.7,
    reviews: 456,
    bestseller: true,
    downloads: 2345,
    fileSize: '18 MB',
    fileType: 'SVG, PNG',
  },
  {
    id: '4',
    name: 'Forex KIng EA',
    price: 34.99,
    category: 'EA MT4',
    description: 'Powerful Expert Advisor for MT4 that analyzes forex market trends and executes trades based on advanced algorithms.',
    image: 'https://i.pinimg.com/1200x/9a/a7/9c/9aa79c15eb6bea38bca8a9497a8b034b.jpg',
    rating: 4.9,
    reviews: 312,
    featured: true,
    downloads: 1567,
    fileSize: '28 MB',
    fileType: 'Figma, XD',
  },
  {
    id: '5',
    name: 'Forex King EA',
    price: 19.99,
    category: 'Group buy',
    description: 'Exclusive group buy offer for Forex King EA. Join now to access this powerful trading tool at a fraction of the cost.',
    image: 'https://i.pinimg.com/1200x/57/38/27/5738272daefeb1e14a43cf3e091486d7.jpg',
    rating: 4.6,
    reviews: 234,
    downloads: 3456,
    fileSize: '250 MB',
    fileType: 'JPG, PNG',
  },
  {
    id: '6',
    name: 'Forex King EA',
    price: 29.99,
    category: 'Pre Order',
    description: 'Pre-order now for the upcoming Forex King EA. Be the first to access this innovative trading tool designed to enhance your trading performance.',
    image: 'https://i.pinimg.com/736x/99/c2/b3/99c2b3c45b10e6aa98a661e5a4cac76f.jpg',
    rating: 4.8,
    reviews: 167,
    downloads: 1890,
    fileSize: '4 MB',
    fileType: 'OTF, TTF',
  },
  {
    id: '7',
    name: 'Trendopedia Cripto Bot',
    price: 44.99,
    category: 'Bot',
    description: 'Advanced crypto trading bot that analyzes market trends and executes trades automatically. Ideal for both beginners and experienced traders.',
    image: 'https://i.pinimg.com/736x/a1/f4/2a/a1f42a359ff5cbfa6842445c324208ad.jpg',
    rating: 4.7,
    reviews: 145,
    downloads: 876,
    fileSize: '120 MB',
    fileType: 'PSD, Figma',
  },
  {
    id: '8',
    name: 'Trendopedia Mejor Bot',
    price: 54.99,
    category: 'Bot',
    description: 'Powerful trading bot that analyzes market trends and executes trades automatically. Ideal for both beginners and experienced traders.',
    image: 'https://i.pinimg.com/736x/01/38/78/013878013156e18a537d07b727d0008f.jpg',
    rating: 4.9,
    reviews: 289,
    bestseller: true,
    downloads: 1234,
    fileSize: '65 MB',
    fileType: 'AI, SVG',
  },
  {
    id: '9',
    name: 'Trendopedia Global Bot',
    price: 39.99,
    category: 'Bot',
    description: 'Versatile trading bot that analyzes global market trends and executes trades automatically. Suitable for traders of all levels.',
    image: 'https://i.pinimg.com/736x/a5/c0/a3/a5c0a3b34e907036b6cd99c2b67f56a6.jpg',
    rating: 4.8,
    reviews: 198,
    downloads: 1456,
    fileSize: '38 MB',
    fileType: 'Figma, Sketch',
  },
  {
    id: '10',
    name: 'Elite Trader Pro',
    price: 64.99,
    category: 'MT5',
    description: 'Comprehensive trading solution for MT5 with advanced features, customizable settings, and powerful performance to elevate your trading experience.',
    image: 'https://i.pinimg.com/1200x/41/aa/9d/41aa9d4e4812d5e383b4586f3540ab97.jpg',
    rating: 4.9,
    reviews: 345,
    featured: true,
    downloads: 2134,
    fileSize: '180 MB',
    fileType: 'Blender, C4D',
  },
  {
    id: '11',
    name: 'Scalping Indicator',
    price: 22.99,
    category: 'Indicator',
    description: 'Effective scalping indicator for MT5 that helps traders identify short-term trading opportunities and make quick decisions in fast-moving markets.',
    image: 'https://i.pinimg.com/736x/b4/fd/d9/b4fdd9a16c5d643b125c3f76c5454e03.jpg',
    rating: 4.7,
    reviews: 267,
    downloads: 2890,
    fileSize: '15 MB',
    fileType: 'SVG, PNG',
  },
  {
    id: '12',
    name: 'Forex Rebelion',
    price: 59.99,
    category: 'EA MT5',
    description: 'Powerful Expert Advisor for MT5 that analyzes forex market trends and executes trades based on advanced algorithms. Designed to maximize profits and minimize risks.',
    image: 'https://i.pinimg.com/736x/d9/37/8c/d9378c648e27b940a7a5870156f45e70.jpg',
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
