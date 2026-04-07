import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from '../../components/Navbar';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Upload, X, Image as ImageIcon, FileArchive } from 'lucide-react';
import { categories } from '../../data/mockData';

export function AddProduct() {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    navigate('/admin/products');
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <div className="pt-16 flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Add New Product</h1>
              <p className="text-gray-400">Create a new product listing</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Basic Information */}
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Basic Information</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Product Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Enter product name"
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price" className="text-gray-300">
                          Price ($) *
                        </Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          required
                          placeholder="49.99"
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-gray-300">
                          Category *
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.id} value={cat.name}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-gray-300">
                        Description *
                      </Label>
                      <Textarea
                        id="description"
                        required
                        rows={6}
                        placeholder="Enter detailed product description..."
                        className="bg-white/5 border-white/10 text-white resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Images */}
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Product Images</h2>

                  <div className="space-y-4">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                        <ImageIcon className="w-8 h-8 text-purple-400" />
                      </div>
                      <p className="text-white font-medium mb-1">Upload Product Images</p>
                      <p className="text-sm text-gray-400 mb-4">
                        Drag and drop or click to browse
                      </p>
                      <Button type="button" variant="outline" className="border-white/20 text-white">
                        <Upload className="w-4 h-4 mr-2" />
                        Browse Files
                      </Button>
                    </div>

                    {/* Preview Grid */}
                    {selectedImages.length > 0 && (
                      <div className="grid grid-cols-4 gap-4">
                        {selectedImages.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group"
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* File Upload */}
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Product Files</h2>

                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-blue-500/50 transition-colors cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                        <FileArchive className="w-8 h-8 text-blue-400" />
                      </div>
                      <p className="text-white font-medium mb-1">Upload Product File</p>
                      <p className="text-sm text-gray-400 mb-4">ZIP, RAR, or other archive formats</p>
                      <Button type="button" variant="outline" className="border-white/20 text-white">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload File
                      </Button>
                    </div>

                    {selectedFile && (
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <FileArchive className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-white font-medium">product-files.zip</p>
                            <p className="text-sm text-gray-400">45 MB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fileSize" className="text-gray-300">
                          File Size
                        </Label>
                        <Input
                          id="fileSize"
                          placeholder="e.g., 45 MB"
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fileType" className="text-gray-300">
                          File Type
                        </Label>
                        <Input
                          id="fileType"
                          placeholder="e.g., Figma, Sketch"
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Additional Details</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        className="w-4 h-4 rounded border-gray-600"
                      />
                      <Label htmlFor="featured" className="text-gray-300 cursor-pointer">
                        Mark as Featured
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bestseller"
                        className="w-4 h-4 rounded border-gray-600"
                      />
                      <Label htmlFor="bestseller" className="text-gray-300 cursor-pointer">
                        Mark as Bestseller
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/50"
                  >
                    Publish Product
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => navigate('/admin/products')}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
