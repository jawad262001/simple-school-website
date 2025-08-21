import React, { useState } from 'react';
import { Plus, X, Check, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  predictedPrice: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  condition: string;
  image: string;
  mpg: {
    city: number;
    highway: number;
  };
  features: string[];
  pros: string[];
  cons: string[];
}

export default function Compare() {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);
  const [showCarSelector, setShowCarSelector] = useState(false);

  const availableCars: Car[] = [
    {
      id: '1',
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: 28500,
      predictedPrice: 29200,
      mileage: 15000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      condition: 'Excellent',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      mpg: { city: 28, highway: 39 },
      features: ['Apple CarPlay', 'Android Auto', 'Safety Sense 2.0', 'LED Headlights', 'Backup Camera'],
      pros: ['Reliable', 'Good fuel economy', 'Spacious interior'],
      cons: ['Uninspiring design', 'Road noise']
    },
    {
      id: '2',
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      price: 24000,
      predictedPrice: 24800,
      mileage: 22000,
      fuelType: 'Gasoline',
      transmission: 'Manual',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
      mpg: { city: 32, highway: 42 },
      features: ['Honda Sensing', 'Touchscreen Display', 'LED Headlights', 'Keyless Entry'],
      pros: ['Excellent fuel economy', 'Fun to drive', 'Reliable'],
      cons: ['Small rear seat', 'Road noise']
    },
    {
      id: '3',
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 42000,
      predictedPrice: 41500,
      mileage: 8000,
      fuelType: 'Electric',
      transmission: 'Automatic',
      condition: 'Excellent',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
      mpg: { city: 142, highway: 132 }, // MPGe for electric
      features: ['Autopilot', 'Supercharging', 'Over-the-air updates', 'Premium Interior'],
      pros: ['Zero emissions', 'Advanced technology', 'Low operating costs'],
      cons: ['Expensive', 'Charging infrastructure', 'Build quality issues']
    },
    {
      id: '4',
      make: 'BMW',
      model: '330i',
      year: 2020,
      price: 35000,
      predictedPrice: 36200,
      mileage: 35000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      mpg: { city: 26, highway: 36 },
      features: ['iDrive Infotainment', 'Premium Audio', 'Heated Seats', 'Sunroof'],
      pros: ['Excellent handling', 'Luxury interior', 'Strong performance'],
      cons: ['Expensive maintenance', 'Firm ride', 'Complex electronics']
    }
  ];

  const addCar = (car: Car) => {
    if (selectedCars.length < 3 && !selectedCars.find(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
      setShowCarSelector(false);
    }
  };

  const removeCar = (carId: string) => {
    setSelectedCars(selectedCars.filter(car => car.id !== carId));
  };

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

  const getPriceComparison = (price: number, predictedPrice: number) => {
    const diff = price - predictedPrice;
    const percentage = Math.abs((diff / predictedPrice) * 100);
    
    if (Math.abs(diff) < 500) {
      return { status: 'fair', text: 'Fair Price', icon: Minus };
    } else if (diff < 0) {
      return { status: 'good', text: `${percentage.toFixed(0)}% Below Market`, icon: TrendingDown };
    } else {
      return { status: 'high', text: `${percentage.toFixed(0)}% Above Market`, icon: TrendingUp };
    }
  };

  const comparisonRows = [
    { label: 'Price', key: 'price', type: 'price' },
    { label: 'Predicted Price', key: 'predictedPrice', type: 'price' },
    { label: 'Year', key: 'year', type: 'number' },
    { label: 'Mileage', key: 'mileage', type: 'mileage' },
    { label: 'Condition', key: 'condition', type: 'text' },
    { label: 'Fuel Type', key: 'fuelType', type: 'text' },
    { label: 'Transmission', key: 'transmission', type: 'text' },
    { label: 'MPG (City/Highway)', key: 'mpg', type: 'mpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Cars</h1>
          <p className="text-gray-600">Compare up to 3 cars side by side to make the best decision</p>
        </div>

        {/* Car Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            {selectedCars.map((car) => (
              <div key={car.id} className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-lg">
                <span className="text-sm font-medium">
                  {car.year} {car.make} {car.model}
                </span>
                <button
                  onClick={() => removeCar(car.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            
            {selectedCars.length < 3 && (
              <button
                onClick={() => setShowCarSelector(true)}
                className="flex items-center space-x-2 border-2 border-dashed border-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span className="text-sm font-medium">Add Car</span>
              </button>
            )}
          </div>

          {/* Car Selector Modal */}
          {showCarSelector && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-96 overflow-y-auto mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Select a Car to Compare</h3>
                  <button
                    onClick={() => setShowCarSelector(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableCars
                    .filter(car => !selectedCars.find(c => c.id === car.id))
                    .map((car) => (
                      <div
                        key={car.id}
                        onClick={() => addCar(car)}
                        className="card cursor-pointer hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={car.image}
                            alt={`${car.year} ${car.make} ${car.model}`}
                            className="w-20 h-15 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {car.year} {car.make} {car.model}
                            </h4>
                            <p className="text-sm text-gray-600">{formatPrice(car.price)}</p>
                            <p className="text-xs text-gray-500">{formatMileage(car.mileage)} miles</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {selectedCars.length > 0 ? (
          <div className="space-y-8">
            {/* Car Cards */}
            <div className={`grid grid-cols-1 ${selectedCars.length === 2 ? 'md:grid-cols-2' : selectedCars.length === 3 ? 'md:grid-cols-3' : ''} gap-6`}>
              {selectedCars.map((car) => {
                const priceComparison = getPriceComparison(car.price, car.predictedPrice);
                
                return (
                  <div key={car.id} className="card">
                    <img
                      src={car.image}
                      alt={`${car.year} ${car.make} ${car.model}`}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {car.year} {car.make} {car.model}
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{formatPrice(car.price)}</div>
                        <div className="text-sm text-gray-600">
                          Predicted: {formatPrice(car.predictedPrice)}
                        </div>
                      </div>
                      
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium ${
                        priceComparison.status === 'good' ? 'bg-green-100 text-green-800' :
                        priceComparison.status === 'high' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        <priceComparison.icon className="h-3 w-3" />
                        <span>{priceComparison.text}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed Comparison */}
            <div className="card overflow-x-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Comparison</h3>
              
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-medium text-gray-900">Specification</th>
                    {selectedCars.map((car) => (
                      <th key={car.id} className="text-center py-3 px-4 font-medium text-gray-900">
                        {car.year} {car.make} {car.model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.key} className="border-b border-gray-100">
                      <td className="py-4 pr-4 font-medium text-gray-700">{row.label}</td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="text-center py-4 px-4 text-gray-900">
                          {row.type === 'price' && formatPrice(car[row.key as keyof Car] as number)}
                          {row.type === 'mileage' && formatMileage(car[row.key as keyof Car] as number)}
                          {row.type === 'mpg' && `${car.mpg.city}/${car.mpg.highway}`}
                          {row.type === 'text' && (car[row.key as keyof Car] as string)}
                          {row.type === 'number' && (car[row.key as keyof Car] as number)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Features Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedCars.map((car) => (
                <div key={car.id} className="card">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {car.make} {car.model} Features
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Key Features</h5>
                      <ul className="space-y-1">
                        {car.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-green-700 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {car.pros.map((pro, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            + {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-red-700 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {car.cons.map((con, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            - {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Plus className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No cars selected</h3>
            <p className="text-gray-600 mb-4">Add cars to start comparing features and prices.</p>
            <button
              onClick={() => setShowCarSelector(true)}
              className="btn btn-primary"
            >
              Add Your First Car
            </button>
          </div>
        )}
      </div>
    </div>
  );
}