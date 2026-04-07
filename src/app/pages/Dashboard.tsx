import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { products, orders } from '../data/mockData';
import { Download, Package, ShoppingBag, Settings, User } from 'lucide-react';

export function Dashboard() {
  // Mock user data
  const userProducts = [products[0], products[2], products[3]];
  const userOrders = orders.slice(0, 3);

  const menuItems = [
    { icon: Package, label: 'My Downloads', active: true },
    { icon: ShoppingBag, label: 'Orders', path: '/dashboard/orders' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">My Dashboard</h1>
              <p className="text-gray-400">Manage your downloads and account</p>
            </div>
            <Link to="/admin">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Admin Panel
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="space-y-2">
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        item.active
                          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Total Downloads', value: '12', icon: Download, color: 'purple' },
                  { label: 'Active Orders', value: '3', icon: ShoppingBag, color: 'blue' },
                  { label: 'Total Spent', value: '$459', icon: Package, color: 'pink' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/20 flex items-center justify-center mb-4`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* My Downloads */}
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">My Downloads</h2>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {userProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-400">{product.category}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {product.fileSize} • {product.fileType}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Recent Orders</h2>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {userOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div>
                        <p className="font-semibold text-white mb-1">Order #{order.id}</p>
                        <p className="text-sm text-gray-400">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white mb-1">${order.total.toFixed(2)}</p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            order.status === 'completed'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
