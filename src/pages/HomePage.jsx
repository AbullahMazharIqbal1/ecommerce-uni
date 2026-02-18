import { Link } from 'react-router-dom';
import { Button } from '../components/UI';

const HeroSection = () => (
  <div className="relative bg-gray-900 text-white overflow-hidden rounded-3xl mx-4 mt-4 shadow-2xl">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-40"
      />
    </div>
    <div className="relative z-10 px-8 py-24 md:py-32 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        Elevate Your Lifestyle
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10">
        Discover premium products designed for modern living. From high-tech electronics to organic essentials.
      </p>
      <Link to="/products">
        <Button className="text-lg px-8 py-4 rounded-full shadow-lg shadow-blue-500/50 hover:scale-105">
          Shop the Collection
        </Button>
      </Link>
    </div>
  </div>
);

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* You can add a "Featured Products" section here later if you want */}
    </div>
  );
};