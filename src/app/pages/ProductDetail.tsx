import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { products } from '../data/mockData';
import { ShoppingCart, Download, Star, Check, ArrowLeft, FileText, HardDrive } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [cart, setCart] = useState<any[]>([]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar cartCount={cart.length} />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link to="/products">
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer hover:border-purple-500/50 transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {product.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    Featured
                  </span>
                )}
                {product.bestseller && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                    Bestseller
                  </span>
                )}
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-gray-300">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                ${product.price}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8 leading-relaxed">{product.description}</p>

              {/* Download Info */}
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What's Included</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <HardDrive className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">File Size</p>
                      <p className="text-sm text-gray-400">{product.fileSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">File Types</p>
                      <p className="text-sm text-gray-400">{product.fileType}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Download className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Downloads</p>
                      <p className="text-sm text-gray-400">{product.downloads.toLocaleString()} total</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {[
                  'Instant download access',
                  'Commercial license included',
                  'Free updates for life',
                  '24/7 customer support',
                  'Money-back guarantee',
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/50"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleAddToCart}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">LICENSE</h3>
                <p className="text-white">Commercial & Personal Use</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">COMPATIBILITY</h3>
                <p className="text-white">Figma, Sketch, Adobe XD</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">LAST UPDATED</h3>
                <p className="text-white">March 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
