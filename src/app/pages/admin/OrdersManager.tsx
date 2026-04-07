import { Navbar } from '../../components/Navbar';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { orders, products, users } from '../../data/mockData';
import { Search, Eye, Download } from 'lucide-react';

export function OrdersManager() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <div className="pt-16 flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Orders</h1>
              <p className="text-gray-400">Manage customer orders</p>
            </div>

            {/* Filters */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 mb-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search orders..."
                    className="pl-10 bg-white/5 border-white/10 text-white"
                  />
                </div>
                <select className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
                <select className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white">
                  <option>All Time</option>
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
            </div>

            {/* Orders Grid */}
            <div className="space-y-4">
              {orders.map((order) => {
                const user = users.find(u => u.id === order.userId);
                const orderProducts = order.products.map(p => 
                  products.find(prod => prod.id === p.productId)
                ).filter(Boolean);

                return (
                  <div
                    key={order.id}
                    className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">Order #{order.id}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === 'completed'
                                ? 'bg-green-500/20 text-green-400'
                                : order.status === 'pending'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{order.date}</span>
                          <span>•</span>
                          <span>{user?.name}</span>
                          <span>•</span>
                          <span>{user?.email}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-2 mb-4">
                      {orderProducts.map((product, idx) => {
                        if (!product) return null;
                        const quantity = order.products[idx]?.quantity || 1;
                        return (
                          <div
                            key={product.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                          >
                            <div className="flex items-center space-x-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div>
                                <p className="text-white font-medium">{product.name}</p>
                                <p className="text-sm text-gray-400">
                                  Quantity: {quantity} × ${product.price}
                                </p>
                              </div>
                            </div>
                            <p className="text-white font-medium">
                              ${(product.price * quantity).toFixed(2)}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Invoice
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-400">Showing 1 to 4 of 234 orders</p>
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
        </main>
      </div>
    </div>
  );
}
