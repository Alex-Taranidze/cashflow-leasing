import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Building2, ArrowRight, HardHat } from 'lucide-react';

const assets = [
  {
    title: 'Легковые',
    icon: Car,
    link: '/passenger-cars',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Грузовые',
    icon: Truck,
    link: '/cargo-transport',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Спецтехника',
    icon: HardHat,
    link: '/special-machinery',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Недвижимость',
    icon: Building2,
    link: '/real-estate',
    color: 'bg-red-50 text-red-600'
  }
];

export const AssetGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {assets.map((asset, index) => (
        <Link
          key={index}
          to={asset.link}
          className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-accent/20 transition-all duration-500 group text-center flex flex-col items-center justify-center"
        >
          <div className={`w-20 h-20 ${asset.color} rounded-[24px] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
            <asset.icon size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-corporate-900 font-display mb-4">{asset.title}</h3>
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <ArrowRight size={20} />
          </div>
        </Link>
      ))}
    </div>
  );
};
