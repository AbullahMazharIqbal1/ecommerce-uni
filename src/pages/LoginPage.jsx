import { useState } from 'react';
import { Button, Input } from '../components/UI';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Logged in successfully!" : "Account created!");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {isLogin ? 'Enter your details to access your account.' : 'Sign up to start shopping.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <Input type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-gray-700" required />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <Input type="email" placeholder="you@example.com" className="w-full bg-gray-50 dark:bg-gray-700" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <Input type="password" placeholder="••••••••" className="w-full bg-gray-50 dark:bg-gray-700" required />
          </div>

          <Button type="submit" className="w-full py-3 text-lg rounded-xl shadow-md text-white bg-blue-600 hover:bg-blue-700">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
        
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition">
            &larr; Back to Store
          </Link>
        </div>

      </div>
    </div>
  );
};