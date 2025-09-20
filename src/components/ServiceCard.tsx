import React from 'react';
import { Phone } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const handleContactUs = () => {
    window.location.href = 'tel:+916362643636';
  };

  return (
    <div className="service-card group">
      {/* Service Image */}
      <div className="relative mb-4">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-lg" />
      </div>

      {/* Service Info */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {service.name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {service.description}
        </p>

        {/* Price and Contact Us */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-2xl font-bold text-black">
            ₹{service.price}
          </div>
          
          <button
            onClick={handleContactUs}
            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Phone size={16} />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 