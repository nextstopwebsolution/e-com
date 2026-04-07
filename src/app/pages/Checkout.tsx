import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { products } from '../data/mockData';
import { CreditCard, Building2, Check } from 'lucide-react';

export function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  // Mock cart items
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock checkout - redirect to success page
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar cartCount={cartItems.length} />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Billing Information */}
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Billing Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        required
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        required
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="address" className="text-gray-300">
                        Street Address
                      </Label>
                      <Input
                        id="address"
                        required
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-gray-300">
                        City
                      </Label>
                      <Input
                        id="city"
                        required
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zip" className="text-gray-300">
                        ZIP Code
                      </Label>
                      <Input
                        id="zip"
                        required
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Payment Method</h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-xl border transition-all ${
                        paymentMethod === 'card'
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <CreditCard className={`w-6 h-6 mb-2 ${paymentMethod === 'card' ? 'text-purple-400' : 'text-gray-400'}`} />
                      <p className="text-white font-medium">Credit Card</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 rounded-xl border transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <Building2 className={`w-6 h-6 mb-2 ${paymentMethod === 'paypal' ? 'text-blue-400' : 'text-gray-400'}`} />
                      <p className="text-white font-medium">PayPal</p>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-gray-300">
                          Card Number
                        </Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-gray-300">
                            Expiry Date
                          </Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            required
                            className="bg-white/5 border-white/10 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-gray-300">
                            CVV
                          </Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                            className="bg-white/5 border-white/10 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="text-center py-8">
                      <p className="text-gray-400 mb-4">You will be redirected to PayPal to complete your purchase</p>
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
                        <Building2 className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="sticky top-24 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                    {cartItems.map(({ product, quantity }) => (
                      <div key={product.id} className="flex gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-white line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-400">Qty: {quantity}</p>
                          <p className="text-sm font-semibold text-purple-400">
                            ${(product.price * quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Tax (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-white">Total</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/50"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Complete Purchase
                  </Button>

                  {/* Security Notice */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-400 text-center">
                      🔒 Your payment information is encrypted and secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
