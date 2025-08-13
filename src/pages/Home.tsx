import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ArrowRight, MapPin, Search } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import LocationPicker from '../components/LocationPicker';
import { Service, Location, Testimonial } from '../types';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/services.json');
        const data = await response.json();
        setServices(data.services);
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setShowServiceModal(false);
  };

  const handleBookNow = () => {
    if (selectedService) {
      // Navigate to services page with the selected service
      navigate('/services', { state: { selectedService: selectedService.id } });
    } else {
      // Navigate to general services page
      navigate('/services');
    }
  };

  const scrollToBookingSection = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="booking-section" className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -translate-y-20 translate-x-20"></div>
        <div className="absolute top-20 right-40 w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-48 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 opacity-30 transform rotate-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Hiring service experts made <span className="text-blue-600 underline">easy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional and reliable home services delivered right to your home
            </p>
          </div>

          {/* Centered Booking Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Card Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Book reliable professionals for your home
                </h2>
                <p className="text-gray-600">
                  Get quality service from verified experts
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location Picker */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <MapPin size={16} className="inline mr-2" />
                    Select your city
                  </label>
                  <LocationPicker 
                    onLocationSelect={handleLocationSelect}
                    selectedLocation={selectedLocation || undefined}
                  />
                </div>

                {/* Service Picker */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <Search size={16} className="inline mr-2" />
                    What service do you need?
                  </label>
                  <button
                    onClick={() => setShowServiceModal(true)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left text-gray-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {selectedService ? selectedService.name : "Select a service"}
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBookNow}
                  disabled={!selectedLocation || !selectedService}
                  className="btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Now
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Service Categories
            </h2>
            <p className="text-gray-600">
              Choose from our wide range of professional home services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 font-bold text-lg">
                    {service.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 text-center">Starting at ₹{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">4.8</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mt-2">Customer Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <p className="text-gray-600 mt-2">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional home services delivered with quality and care. 
              Choose from our range of reliable services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Space Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional home services at unbeatable prices. 
              Quality guaranteed, satisfaction assured.
            </p>
            <Link 
              to="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToBookingSection();
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">What service do you need?</h3>
              <button
                onClick={() => setShowServiceModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleServiceSelect(service)}
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <ArrowRight size={20} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 