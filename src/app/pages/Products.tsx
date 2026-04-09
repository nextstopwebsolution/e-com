import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { products, categories, Product } from '../data/mockData';
import { SlidersHorizontal, X } from 'lucide-react';

export function Products() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch = product.rating >= minRating;
    return categoryMatch && priceMatch && ratingMatch;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar cartCount={cart.length} />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">All Products</h1>
              <p className="text-gray-400">{filteredProducts.length} products found</p>
            </div>
            <Button
              variant="outline"
              className="lg:hidden border-white/20 text-white"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
              <div className="sticky top-24 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden text-gray-400"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Categories Filter */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={() => toggleCategory(category.name)}
                        />
                        <Label
                          htmlFor={category.id}
                          className="text-sm text-gray-300 cursor-pointer flex-1"
                        >
                          {category.name}
                          <span className="text-gray-500 ml-1">({category.count})</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">Minimum Rating</h3>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <div
                        key={rating}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                          minRating === rating
                            ? 'bg-purple-500/20 border border-purple-500/50'
                            : 'hover:bg-white/5'
                        }`}
                        onClick={() => setMinRating(rating)}
                      >
                        <span className="text-sm text-gray-300">{rating}+ ⭐</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-black hover:bg-white/10"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 100]);
                    setMinRating(0);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your filters</p>
                  <Button
                    onClick={() => {
                      setSelectedCategories([]);
                      setPriceRange([0, 100]);
                      setMinRating(0);
                    }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
