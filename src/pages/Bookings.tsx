import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Star, Eye, Phone } from 'lucide-react';

interface Booking {
  id: string;
  serviceName: string;
  serviceImage: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
  address: string;
  technician?: {
    name: string;
    phone: string;
    rating: number;
  };
}

const Bookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  const bookings: Booking[] = [
    {
      id: '1',
      serviceName: 'AC Repair',
      serviceImage: 'https://images.unsplash.com/photo-1581578731548-cf97c24ac1f7?w=400&h=300&fit=crop',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'upcoming',
      price: 599,
      address: '123 Main Street, City, State 12345',
      technician: {
        name: 'Rajesh Kumar',
        phone: '+91 98765 43210',
        rating: 4.8
      }
    },
    {
      id: '2',
      serviceName: 'Geyser Repair',
      serviceImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      date: '2024-01-10',
      time: '2:00 PM',
      status: 'completed',
      price: 699,
      address: '123 Main Street, City, State 12345',
      technician: {
        name: 'Amit Singh',
        phone: '+91 98765 43211',
        rating: 4.9
      }
    },
    {
      id: '3',
      serviceName: 'Home Cleaning',
      serviceImage: 'https://images.unsplash.com/photo-1581578731548-7f23fd83b7f1?w=400&h=300&fit=crop',
      date: '2024-01-05',
      time: '9:00 AM',
      status: 'completed',
      price: 799,
      address: '123 Main Street, City, State 12345'
    }
  ];

  const filteredBookings = bookings.filter(booking => booking.status === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
              <p className="text-gray-600">Track your service appointments</p>
            </div>
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 py-4 px-6 text-sm font-medium text-center border-b-2 transition-colors ${
                activeTab === 'upcoming'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 py-4 px-6 text-sm font-medium text-center border-b-2 transition-colors ${
                activeTab === 'completed'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab('cancelled')}
              className={`flex-1 py-4 px-6 text-sm font-medium text-center border-b-2 transition-colors ${
                activeTab === 'cancelled'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Cancelled
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No {activeTab} bookings</h3>
              <p className="mt-1 text-sm text-gray-500">
                {activeTab === 'upcoming' 
                  ? "You don't have any upcoming bookings."
                  : activeTab === 'completed'
                  ? "You don't have any completed bookings."
                  : "You don't have any cancelled bookings."
                }
              </p>
              <div className="mt-6">
                <Link
                  to="/services"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Book a Service
                </Link>
              </div>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow-sm border">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Service Image */}
                    <img
                      src={booking.serviceImage}
                      alt={booking.serviceName}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    {/* Booking Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {booking.serviceName}
                          </h3>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="mr-2 h-4 w-4" />
                              {new Date(booking.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="mr-2 h-4 w-4" />
                              {booking.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="mr-2 h-4 w-4" />
                              {booking.address}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {getStatusText(booking.status)}
                          </span>
                          <div className="mt-2 text-lg font-semibold text-gray-900">
                            ₹{booking.price}
                          </div>
                        </div>
                      </div>

                      {/* Technician Info (for upcoming bookings) */}
                      {booking.status === 'upcoming' && booking.technician && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                Assigned Technician: {booking.technician.name}
                              </h4>
                              <div className="flex items-center mt-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="ml-1 text-sm text-gray-600">
                                  {booking.technician.rating} rating
                                </span>
                              </div>
                            </div>
                            <a
                              href={`tel:${booking.technician.phone}`}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              <Phone size={16} />
                              <span>Call</span>
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="mt-4 flex items-center space-x-3">
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                          <Eye size={16} />
                          <span>View Details</span>
                        </button>
                        {booking.status === 'upcoming' && (
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Cancel Booking
                          </button>
                        )}
                        {booking.status === 'completed' && (
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Book Again
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings; 