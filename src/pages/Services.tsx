import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/services.json');
        const data = await response.json();
        setServices(data.services);
        
        // Check if we have a selected service from navigation
        if (location.state?.selectedService) {
          setSelectedServiceId(location.state.selectedService);
          // Scroll to the selected service after a short delay
          setTimeout(() => {
            const element = document.getElementById(`service-${location.state.selectedService}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 500);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location.state]);

  const scrollToBookingSection = () => {
    // Navigate to homepage first
    navigate('/');
    // Then scroll to booking section after a short delay
    setTimeout(() => {
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional home services delivered with quality and care. 
              Choose from our comprehensive range of reliable services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`transition-all duration-300 ${
                  selectedServiceId === service.id 
                    ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' 
                    : ''
                }`}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-gray-600">
              We offer services across multiple categories to meet all your home needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Appliance Repair */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl font-bold">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Appliance Repair</h3>
              <p className="text-gray-600 mb-4">
                Professional repair services for all your home appliances including water purifiers, microwaves, and gas geysers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Water Purifier Service</li>
                <li>• Microwave Repair & Service</li>
                <li>• Gas Geyser Repair</li>
                <li>• AC Repair & Maintenance</li>
                <li>• Geyser Installation & Repair</li>
                <li>• Washing Machine Repair</li>
                <li>• Chimney Repair & Maintenance</li>
              </ul>
            </div>

            {/* Electronics & Security */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 text-2xl font-bold">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Electronics & Security</h3>
              <p className="text-gray-600 mb-4">
                Expert services for your electronic devices and security systems to keep you connected and protected.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mobile Phone Repair</li>
                <li>• CCTV Installation & Setup</li>
                <li>• Security System Maintenance</li>
                <li>• Professional Installation</li>
              </ul>
            </div>

            {/* Home Cleaning */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-purple-600 text-2xl font-bold">🧹</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Home Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cleaning services to keep your home spotless and hygienic.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Regular Home Cleaning</li>
                <li>• Deep Cleaning Services</li>
                <li>• Kitchen & Bathroom Cleaning</li>
                <li>• Professional cleaning staff</li>
              </ul>
            </div>

            {/* Professional Service */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-orange-600 text-2xl font-bold">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Service</h3>
              <p className="text-gray-600 mb-4">
                Expert technicians with years of experience and proper certifications for all your home service needs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Certified Technicians</li>
                <li>• Quality Guaranteed</li>
                <li>• Warranty on Services</li>
                <li>• 24/7 Customer Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Urban Services?
            </h2>
            <p className="text-gray-600">
              We provide reliable, professional, and affordable home services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">Same-day service available for urgent repairs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All services come with quality assurance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Service</h3>
              <p className="text-gray-600">Serving your local area with quick response</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get professional home services at unbeatable prices
          </p>
          <Link 
            to="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToBookingSection();
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 