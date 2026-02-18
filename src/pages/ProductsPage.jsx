import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { productsData } from '../data/products';
import { Button, Input, Rating, Loader } from '../components/UI';
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
      
      {/* 1. CLICKABLE IMAGE: This opens the details page */}
      <Link to={`/products/${product.id}`} className="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-700 block">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full uppercase tracking-wide dark:bg-blue-900/30 dark:text-blue-300">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            <span>★</span>
            <span className="text-gray-600 dark:text-gray-400 font-medium">{product.rating}</span>
          </div>
        </div>

        {/* 2. CLICKABLE TITLE: This also opens the details page */}
        <Link to={`/products/${product.id}`}>
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1 leading-tight line-clamp-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm dark:text-gray-400 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <Button 
            onClick={() => addToCart(product)} 
            className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/30 text-white"
          >
            Add +
          </Button>
        </div>
      </div>
    </div>
  );
};
export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => { setProducts(productsData); setLoading(false); }, 800);
  }, []);

  const filteredProducts = products
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === "All" ? true : p.category === category)
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  const categories = ["All", ...new Set(productsData.map(p => p.category))];

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Our Products</h1>

      {/* Controls: Search, Filter, Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1" />

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded dark:bg-gray-700 dark:text-white">
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)} className="border p-2 rounded dark:bg-gray-700 dark:text-white">
          <option value="default">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {loading ? <Loader /> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </div>
  );
};