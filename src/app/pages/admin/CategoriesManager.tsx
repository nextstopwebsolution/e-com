import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { categories } from '../../data/mockData';
import { Plus, Edit, Trash2, FolderTree } from 'lucide-react';

export function CategoriesManager() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <div className="pt-16 flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Categories</h1>
                <p className="text-gray-400">Manage product categories</p>
              </div>
              <Button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </div>

            {/* Add Category Form */}
            {showAddForm && (
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-6">Add New Category</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="categoryName" className="text-gray-300">
                        Category Name
                      </Label>
                      <Input
                        id="categoryName"
                        placeholder="e.g., UI Kits"
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="categoryIcon" className="text-gray-300">
                        Icon
                      </Label>
                      <Input
                        id="categoryIcon"
                        placeholder="e.g., Layout"
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      Create Category
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-purple-500/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FolderTree className="w-7 h-7 text-purple-400" />
                    </div>
                    <div className="flex space-x-1">
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
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">{category.count} products</p>
                    <span className="text-sm px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                <p className="text-sm text-gray-400 mb-1">Total Categories</p>
                <p className="text-3xl font-bold text-white">{categories.length}</p>
              </div>
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                <p className="text-sm text-gray-400 mb-1">Total Products</p>
                <p className="text-3xl font-bold text-white">
                  {categories.reduce((sum, cat) => sum + cat.count, 0)}
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                <p className="text-sm text-gray-400 mb-1">Active Categories</p>
                <p className="text-3xl font-bold text-white">{categories.length}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
