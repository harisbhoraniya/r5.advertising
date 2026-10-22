import React from 'react';
import { Link } from 'react-router-dom';

interface BackToProductsProps {
  to?: string;
  label?: string;
}

export const BackToProducts: React.FC<BackToProductsProps> = ({
  to = '/n-loc',
  label = '← Back to Products'
}) => {
  return (
    <div className="py-6 pb-4 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <Link 
          to={to} 
          className="text-[13.5px] font-medium text-gray-600 inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-gray-900"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};
