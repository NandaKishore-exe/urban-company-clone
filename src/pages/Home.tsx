import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import LocationPicker from '../components/LocationPicker';
import { Service, Location, Testimonial } from '../types';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Home Services at Your Doorstep
                </h1>
                <p className="text-xl text-gray-600">
                  Professional and reliable home services delivered right to your home. 
                  Quality guaranteed, satisfaction assured.
                </p>
              </div>

              {/* Location Picker */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Where do you need our services?
                </h3>
                <LocationPicker 
                  onLocationSelect={handleLocationSelect}
                  selectedLocation={selectedLocation || undefined}
                />
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary inline-flex items-center justify-center">
                  Book Now
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-black font-bold">AC</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">AC Repair</h3>
                    <p className="text-sm text-gray-600">Professional AC services</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-black font-bold">TV</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">TV Repair</h3>
                    <p className="text-sm text-gray-600">Expert TV services</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-black font-bold">HC</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Home Cleaning</h3>
                    <p className="text-sm text-gray-600">Spotless cleaning</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-black font-bold">WM</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Washing Machine</h3>
                    <p className="text-sm text-gray-600">Reliable repair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black">4.8</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mt-2">Customer Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">10K+</div>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">24/7</div>
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
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Space Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional home services at unbeatable prices. 
              Quality guaranteed, satisfaction assured.
            </p>
            <Link to="/services" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
    </div>
  );
};

export default Home; 