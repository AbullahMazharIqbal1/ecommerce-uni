import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  };
  return <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
};

export const Input = ({ type = "text", placeholder, value, onChange, className = "" }) => (
  <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`} />
);

export const Rating = ({ score }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < Math.round(score) ? '★' : '☆'}</span>
    ))}
    <span className="text-gray-500 text-sm ml-2 dark:text-gray-400">({score})</span>
  </div>
);

export const Loader = () => (
  <div className="flex justify-center items-center p-10">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

export const Breadcrumb = ({ links }) => (
  <nav className="text-sm mb-6 text-gray-500 dark:text-gray-400">
    {links.map((link, index) => (
      <span key={index}>
        {link.path ? (
          <Link to={link.path} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {link.label}
          </Link>
        ) : (
          <span className="text-gray-800 dark:text-gray-200">{link.label}</span>
        )}
        {index < links.length - 1 && <span className="mx-2">/</span>}
      </span>
    ))}
  </nav>
);

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md transform transition-all">
        <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
        <div className="mb-6 dark:text-gray-300">{children}</div>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};