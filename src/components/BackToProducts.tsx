import React from 'react';
import { Link } from 'react-router-dom';

interface BackToProductsProps {
  to?: string;
  label?: string;
}

export const BackToProducts: React.FC<BackToProductsProps> = ({
  to = '/products',
  label = '← Back to Products'
}) => {
  return (
    <div className="py-4 sm:py-6 pb-2 sm:pb-4 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <Link 
          to={to} 
          className="text-[13px] sm:text-[13.5px] font-medium text-slate-600 inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-emerald-800"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default BackToProducts;
