import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Location } from '../types';

interface LocationPickerProps {
  onLocationSelect: (location: Location) => void;
  selectedLocation?: Location;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onLocationSelect, selectedLocation }) => {
  const [searchQuery, setSearchQuery] = useState(selectedLocation?.address || '');
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentLocation = () => {
    setIsLoading(true);
    
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // Simulate reverse geocoding (in a real app, you'd use Google Maps API)
        const mockAddress = `Current Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
        
        const location: Location = {
          address: mockAddress,
          latitude,
          longitude
        };
        
        setSearchQuery(mockAddress);
        onLocationSelect(location);
        setIsLoading(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to get your current location. Please enter your address manually.');
        setIsLoading(false);
      }
    );
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const location: Location = {
        address: searchQuery.trim()
      };
      onLocationSelect(location);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearchSubmit} className="flex flex-col space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter your address"
            className="input-field pl-10"
          />
        </div>

        {/* Current Location Button */}
        <button
          type="button"
          onClick={getCurrentLocation}
          disabled={isLoading}
          className="flex items-center justify-center space-x-2 btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MapPin size={20} />
          <span>{isLoading ? 'Getting location...' : '📍 Use my current location'}</span>
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!searchQuery.trim()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Set Location
        </button>
      </form>
    </div>
  );
};

export default LocationPicker; 