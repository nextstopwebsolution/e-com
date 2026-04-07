import { Navbar } from '../../components/Navbar';
import { AdminSidebar } from '../../components/AdminSidebar';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, ShoppingBag, Users, Package, TrendingUp, TrendingDown } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', trend: 'up', icon: DollarSign },
    { label: 'Total Orders', value: '1,234', change: '+8.2%', trend: 'up', icon: ShoppingBag },
    { label: 'Total Users', value: '8,549', change: '+23.1%', trend: 'up', icon: Users },
    { label: 'Total Products', value: '456', change: '-2.4%', trend: 'down', icon: Package },
  ];

  const salesData = [
    { month: 'Jan', sales: 4000, orders: 240 },
    { month: 'Feb', sales: 3000, orders: 198 },
    { month: 'Mar', sales: 5000, orders: 320 },
    { month: 'Apr', sales: 4500, orders: 278 },
    { month: 'May', sales: 6000, orders: 389 },
    { month: 'Jun', sales: 5500, orders: 349 },
  ];

  const categoryData = [
    { name: 'UI Kits', value: 35, color: '#a855f7' },
    { name: 'Icons', value: 25, color: '#3b82f6' },
    { name: 'Templates', value: 20, color: '#ec4899' },
    { name: 'Fonts', value: 10, color: '#10b981' },
    { name: 'Others', value: 10, color: '#f59e0b' },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <div className="pt-16 flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
              <p className="text-gray-400">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        stat.icon === DollarSign ? 'from-purple-500/20 to-purple-500/10' :
                        stat.icon === ShoppingBag ? 'from-blue-500/20 to-blue-500/10' :
                        stat.icon === Users ? 'from-pink-500/20 to-pink-500/10' :
                        'from-green-500/20 to-green-500/10'
                      } flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${
                          stat.icon === DollarSign ? 'text-purple-400' :
                          stat.icon === ShoppingBag ? 'text-blue-400' :
                          stat.icon === Users ? 'text-pink-400' :
                          'text-green-400'
                        }`} />
                      </div>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                        stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        <TrendIcon className="w-3 h-3" />
                        <span className="text-xs font-medium">{stat.change}</span>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Sales Chart */}
              <div className="lg:col-span-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Sales Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '12px',
                        color: '#fff',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stroke="#a855f7"
                      strokeWidth={2}
                      fill="url(#salesGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Category Distribution */}
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '12px',
                        color: '#fff',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {categoryData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-gray-400">{item.name}</span>
                      </div>
                      <span className="text-sm text-white font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Orders Chart */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
              <h2 className="text-xl font-bold text-white mb-6">Monthly Orders</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#fff',
                    }}
                  />
                  <Bar dataKey="orders" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
