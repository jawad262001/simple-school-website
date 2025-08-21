import React, { useState } from 'react';
import { Search, Filter, Heart, Eye, Calendar, Gauge, Fuel, Settings } from 'lucide-react';

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  location: string;
  image: string;
  condition: string;
  predictedPrice: number;
}

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [yearRange, setYearRange] = useState([2010, 2024]);
  const [showFilters, setShowFilters] = useState(false);

  const cars: Car[] = [
    {
      id: '1',
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: 28500,
      mileage: 15000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      condition: 'Excellent',
      predictedPrice: 29200,
    },
    {
      id: '2',
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      price: 24000,
      mileage: 22000,
      fuelType: 'Gasoline',
      transmission: 'Manual',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
      condition: 'Good',
      predictedPrice: 24800,
    },
    {
      id: '3',
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 42000,
      mileage: 8000,
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
      condition: 'Excellent',
      predictedPrice: 41500,
    },
    {
      id: '4',
      make: 'BMW',
      model: '330i',
      year: 2020,
      price: 35000,
      mileage: 35000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      condition: 'Good',
      predictedPrice: 36200,
    },
    {
      id: '5',
      make: 'Audi',
      model: 'A4',
      year: 2021,
      price: 38000,
      mileage: 18000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
      condition: 'Excellent',
      predictedPrice: 38500,
    },
    {
      id: '6',
      make: 'Ford',
      model: 'Mustang',
      year: 2022,
      price: 32000,
      mileage: 12000,
      fuelType: 'Gasoline',
      transmission: 'Manual',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=400&h=300&fit=crop',
      condition: 'Excellent',
      predictedPrice: 32800,
    },
  ];

  const makes = Array.from(new Set(cars.map(car => car.make))).sort();

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = !selectedMake || car.make === selectedMake;
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    const matchesYear = car.year >= yearRange[0] && car.year <= yearRange[1];
    
    return matchesSearch && matchesMake && matchesPrice && matchesYear;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Cars</h1>
          <p className="text-gray-600">Discover your perfect car from our extensive inventory</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="card sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden btn btn-outline text-sm"
                >
                  <Filter className="h-4 w-4" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search make or model..."
                      className="input pl-10"
                    />
                  </div>
                </div>

                {/* Make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Make
                  </label>
                  <select
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="input"
                  >
                    <option value="">All Makes</option>
                    {makes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        placeholder="Min"
                        className="input flex-1"
                      />
                      <span className="text-gray-500">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                        placeholder="Max"
                        className="input flex-1"
                      />
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                    </div>
                  </div>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year Range
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={yearRange[0]}
                        onChange={(e) => setYearRange([parseInt(e.target.value) || 2010, yearRange[1]])}
                        placeholder="Min"
                        className="input flex-1"
                      />
                      <span className="text-gray-500">-</span>
                      <input
                        type="number"
                        value={yearRange[1]}
                        onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value) || 2024])}
                        placeholder="Max"
                        className="input flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedMake('');
                    setPriceRange([0, 100000]);
                    setYearRange([2010, 2024]);
                  }}
                  className="w-full btn btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredCars.length} cars found
              </p>
              <select className="input w-auto">
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Year (Newest)</option>
                <option>Sort by: Year (Oldest)</option>
                <option>Sort by: Mileage (Low to High)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div key={car.id} className="card group hover:shadow-lg transition-all duration-300">
                  <div className="relative mb-4">
                    <img
                      src={car.image}
                      alt={`${car.year} ${car.make} ${car.model}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <Heart className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <Eye className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        car.condition === 'Excellent' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {car.condition}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {car.year} {car.make} {car.model}
                      </h3>
                      <p className="text-sm text-gray-600">{car.location}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Gauge className="h-4 w-4" />
                        <span>{formatMileage(car.mileage)} mi</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Fuel className="h-4 w-4" />
                        <span>{car.fuelType}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Settings className="h-4 w-4" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {formatPrice(car.price)}
                          </div>
                          <div className="text-sm text-gray-600">
                            Predicted: {formatPrice(car.predictedPrice)}
                          </div>
                        </div>
                        <div className={`px-2 py-1 text-xs font-medium rounded ${
                          car.price <= car.predictedPrice
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {car.price <= car.predictedPrice ? 'Good Deal' : 'Overpriced'}
                        </div>
                      </div>
                    </div>

                    <button className="w-full btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No cars found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}