import React, { useState } from 'react';
import { Calculator, TrendingUp, AlertCircle, CheckCircle, Car, Calendar, Gauge, MapPin, Wrench } from 'lucide-react';

interface PredictionForm {
  make: string;
  model: string;
  year: number;
  mileage: number;
  condition: string;
  fuelType: string;
  transmission: string;
  location: string;
  bodyType: string;
  engineSize: string;
}

interface PredictionResult {
  predictedPrice: number;
  confidence: number;
  priceRange: {
    min: number;
    max: number;
  };
  factors: {
    name: string;
    impact: 'positive' | 'negative' | 'neutral';
    description: string;
  }[];
  marketTrend: 'up' | 'down' | 'stable';
  recommendedAction: string;
}

export default function Predict() {
  const [form, setForm] = useState<PredictionForm>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    mileage: 0,
    condition: '',
    fuelType: '',
    transmission: '',
    location: '',
    bodyType: '',
    engineSize: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const makes = ['Toyota', 'Honda', 'BMW', 'Mercedes-Benz', 'Audi', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Volkswagen'];
  const conditions = ['Excellent', 'Good', 'Fair', 'Poor'];
  const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'];
  const transmissions = ['Manual', 'Automatic', 'CVT'];
  const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Truck', 'Van'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.make) newErrors.make = 'Make is required';
    if (!form.model) newErrors.model = 'Model is required';
    if (form.year < 1990 || form.year > new Date().getFullYear() + 1) {
      newErrors.year = 'Year must be between 1990 and ' + (new Date().getFullYear() + 1);
    }
    if (form.mileage < 0) newErrors.mileage = 'Mileage cannot be negative';
    if (!form.condition) newErrors.condition = 'Condition is required';
    if (!form.fuelType) newErrors.fuelType = 'Fuel type is required';
    if (!form.transmission) newErrors.transmission = 'Transmission is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock prediction result
    const basePrice = 25000 + (form.year - 2010) * 2000 - (form.mileage / 1000) * 200;
    const conditionMultiplier = {
      'Excellent': 1.1,
      'Good': 1.0,
      'Fair': 0.85,
      'Poor': 0.7
    }[form.condition] || 1.0;
    
    const predictedPrice = Math.max(basePrice * conditionMultiplier, 5000);
    
    setResult({
      predictedPrice: Math.round(predictedPrice),
      confidence: 89,
      priceRange: {
        min: Math.round(predictedPrice * 0.9),
        max: Math.round(predictedPrice * 1.1),
      },
      factors: [
        {
          name: 'Low Mileage',
          impact: form.mileage < 50000 ? 'positive' : 'negative',
          description: form.mileage < 50000 ? 'Below average mileage increases value' : 'Higher mileage reduces value'
        },
        {
          name: 'Vehicle Condition',
          impact: form.condition === 'Excellent' ? 'positive' : form.condition === 'Poor' ? 'negative' : 'neutral',
          description: `${form.condition} condition affects market value`
        },
        {
          name: 'Vehicle Age',
          impact: form.year >= 2020 ? 'positive' : form.year < 2015 ? 'negative' : 'neutral',
          description: form.year >= 2020 ? 'Recent model year' : 'Older vehicle may have lower value'
        },
        {
          name: 'Fuel Type',
          impact: form.fuelType === 'Electric' || form.fuelType === 'Hybrid' ? 'positive' : 'neutral',
          description: form.fuelType === 'Electric' || form.fuelType === 'Hybrid' ? 
            'Eco-friendly vehicles are in demand' : 'Standard fuel type'
        }
      ],
      marketTrend: 'up',
      recommendedAction: predictedPrice > 30000 ? 
        'Consider selling soon as market conditions are favorable' :
        'Good time to buy or hold for potential appreciation'
    });
    
    setIsLoading(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Price Predictor</h1>
          <p className="text-gray-600">Get an accurate price prediction for any vehicle using our AI-powered tool</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Calculator className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Vehicle Information</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Make */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Make *
                    </label>
                    <select
                      value={form.make}
                      onChange={(e) => setForm({ ...form, make: e.target.value })}
                      className={`input ${errors.make ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select make</option>
                      {makes.map(make => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                    {errors.make && <p className="text-red-500 text-sm mt-1">{errors.make}</p>}
                  </div>

                  {/* Model */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      value={form.model}
                      onChange={(e) => setForm({ ...form, model: e.target.value })}
                      placeholder="e.g., Camry"
                      className={`input ${errors.model ? 'border-red-500' : ''}`}
                    />
                    {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year *
                    </label>
                    <input
                      type="number"
                      value={form.year}
                      onChange={(e) => setForm({ ...form, year: parseInt(e.target.value) })}
                      min="1990"
                      max={new Date().getFullYear() + 1}
                      className={`input ${errors.year ? 'border-red-500' : ''}`}
                    />
                    {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                  </div>

                  {/* Mileage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mileage
                    </label>
                    <input
                      type="number"
                      value={form.mileage}
                      onChange={(e) => setForm({ ...form, mileage: parseInt(e.target.value) || 0 })}
                      placeholder="0"
                      min="0"
                      className={`input ${errors.mileage ? 'border-red-500' : ''}`}
                    />
                    {errors.mileage && <p className="text-red-500 text-sm mt-1">{errors.mileage}</p>}
                  </div>

                  {/* Condition */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Condition *
                    </label>
                    <select
                      value={form.condition}
                      onChange={(e) => setForm({ ...form, condition: e.target.value })}
                      className={`input ${errors.condition ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select condition</option>
                      {conditions.map(condition => (
                        <option key={condition} value={condition}>{condition}</option>
                      ))}
                    </select>
                    {errors.condition && <p className="text-red-500 text-sm mt-1">{errors.condition}</p>}
                  </div>

                  {/* Fuel Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuel Type *
                    </label>
                    <select
                      value={form.fuelType}
                      onChange={(e) => setForm({ ...form, fuelType: e.target.value })}
                      className={`input ${errors.fuelType ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select fuel type</option>
                      {fuelTypes.map(fuel => (
                        <option key={fuel} value={fuel}>{fuel}</option>
                      ))}
                    </select>
                    {errors.fuelType && <p className="text-red-500 text-sm mt-1">{errors.fuelType}</p>}
                  </div>

                  {/* Transmission */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transmission *
                    </label>
                    <select
                      value={form.transmission}
                      onChange={(e) => setForm({ ...form, transmission: e.target.value })}
                      className={`input ${errors.transmission ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select transmission</option>
                      {transmissions.map(trans => (
                        <option key={trans} value={trans}>{trans}</option>
                      ))}
                    </select>
                    {errors.transmission && <p className="text-red-500 text-sm mt-1">{errors.transmission}</p>}
                  </div>

                  {/* Body Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Body Type
                    </label>
                    <select
                      value={form.bodyType}
                      onChange={(e) => setForm({ ...form, bodyType: e.target.value })}
                      className="input"
                    >
                      <option value="">Select body type</option>
                      {bodyTypes.map(body => (
                        <option key={body} value={body}>{body}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="e.g., Los Angeles, CA"
                      className="input"
                    />
                  </div>

                  {/* Engine Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Engine Size
                    </label>
                    <input
                      type="text"
                      value={form.engineSize}
                      onChange={(e) => setForm({ ...form, engineSize: e.target.value })}
                      placeholder="e.g., 2.0L"
                      className="input"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Calculator className="h-5 w-5" />
                      <span>Get Price Prediction</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            {result ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Predicted Price</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      {formatPrice(result.predictedPrice)}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Range: {formatPrice(result.priceRange.min)} - {formatPrice(result.priceRange.max)}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">
                        {result.confidence}% Confidence
                      </span>
                    </div>
                  </div>
                </div>

                {/* Market Trend */}
                <div className="card">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-gray-600" />
                    <h4 className="font-semibold text-gray-900">Market Trend</h4>
                  </div>
                  <div className={`px-3 py-2 rounded-lg text-sm ${
                    result.marketTrend === 'up' 
                      ? 'bg-green-100 text-green-800'
                      : result.marketTrend === 'down'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {result.marketTrend === 'up' && '📈 Trending Up'}
                    {result.marketTrend === 'down' && '📉 Trending Down'}
                    {result.marketTrend === 'stable' && '➡️ Stable'}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {result.recommendedAction}
                  </p>
                </div>

                {/* Price Factors */}
                <div className="card">
                  <h4 className="font-semibold text-gray-900 mb-4">Price Factors</h4>
                  <div className="space-y-3">
                    {result.factors.map((factor, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          factor.impact === 'positive' 
                            ? 'bg-green-500'
                            : factor.impact === 'negative'
                            ? 'bg-red-500'
                            : 'bg-gray-500'
                        }`} />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{factor.name}</div>
                          <div className="text-xs text-gray-600">{factor.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="card text-center py-12">
                <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Predict</h3>
                <p className="text-gray-600 text-sm">
                  Fill out the form to get an accurate price prediction for your vehicle.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">
              Our advanced algorithms analyze thousands of data points for accurate predictions.
            </p>
          </div>

          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Highly Accurate</h3>
            <p className="text-gray-600 text-sm">
              98% accuracy rate based on real market data and transaction history.
            </p>
          </div>

          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Insights</h3>
            <p className="text-gray-600 text-sm">
              Get detailed insights into factors affecting your vehicle's value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}