import { Link } from 'react-router';
import { Navbar } from '../../components/Navbar';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { products } from '../../data/mockData';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

export function ProductsManager() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <div className="pt-16 flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
                <p className="text-gray-400">Manage your product listings</p>
              </div>
              <Link to="/admin/add-product">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </Link>
            </div>

            {/* Filters */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 mb-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 bg-white/5 border-white/10 text-white"
                  />
                </div>
                <select className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white">
                  <option>All Categories</option>
                  <option>UI Kits</option>
                  <option>Icons</option>
                  <option>Templates</option>
                </select>
                <select className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white">
                  <option>All Status</option>
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>

            {/* Products Table */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Downloads
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Rating
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.slice(0, 10).map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-white">{product.name}</p>
                              <p className="text-sm text-gray-400">{product.fileType}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-white">${product.price}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-300">{product.downloads.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-white">{product.rating}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                            Published
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end space-x-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-gray-400 hover:text-white hover:bg-white/10"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-gray-400 hover:text-white hover:bg-white/10"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-sm text-gray-400">Showing 1 to 10 of 456 products</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-white/20 text-white">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
