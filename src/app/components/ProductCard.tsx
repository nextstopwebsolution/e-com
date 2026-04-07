import { ShoppingCart, Star, Download } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { Product } from '../data/mockData';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Glassmorphism card */}
      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
        {/* Product Image */}
        <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
                Featured
              </span>
            )}
            {product.bestseller && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg">
                Bestseller
              </span>
            )}
          </div>

          {/* Quick add to cart - shows on hover */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart?.(product);
              }}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-400 mt-1">{product.category}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Downloads */}
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Download className="w-4 h-4 mr-1" />
            {product.downloads.toLocaleString()} downloads
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ${product.price}
            </div>
            <Button
              size="icon"
              onClick={() => onAddToCart?.(product)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/50"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
