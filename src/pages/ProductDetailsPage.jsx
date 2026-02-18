import { useParams, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { productsData } from '../data/products';
import { Button, Rating, Breadcrumb } from '../components/UI';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  
  // Find the product based on the URL parameter
  const product = productsData.find(p => p.id === parseInt(id));

  // If user types a bad ID in the URL, send them back to products
  if (!product) return <Navigate to="/products" />;

  const breadcrumbLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: product.title, path: null }
  ];

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <Breadcrumb links={breadcrumbLinks} />
      
      <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {product.title}
          </h1>
          <div className="mb-6">
            <Rating score={product.rating} />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>
          
          <Button 
            onClick={() => addToCart(product)} 
            className="w-full md:w-auto py-4 text-lg rounded-full shadow-lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};