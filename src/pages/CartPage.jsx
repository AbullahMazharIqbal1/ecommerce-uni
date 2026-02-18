import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button } from '../components/UI';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return (
    <div className="text-center p-20 min-h-screen dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
      <Link to="/products"><Button>Go Shopping</Button></Link>
    </div>
  );

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Shopping Cart</h2>
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-4 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <h4 className="font-semibold dark:text-white">{item.title}</h4>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} className="w-16 border p-1 rounded text-center dark:bg-gray-700 dark:text-white" />
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md h-fit">
        <h3 className="text-xl font-bold mb-4 dark:text-white">Order Summary</h3>
        <div className="flex justify-between mb-2 dark:text-gray-300"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
        <div className="flex justify-between mb-4 dark:text-gray-300"><span>Shipping</span><span>Free</span></div>
        <div className="flex justify-between font-bold text-lg border-t pt-4 dark:border-gray-700 dark:text-white">
          <span>Total</span><span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full mt-6">Proceed to Checkout</Button>
      </div>
    </div>
  );
};