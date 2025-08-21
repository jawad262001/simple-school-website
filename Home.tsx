import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Users, Car, DollarSign, BarChart3, Search, Star } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning algorithms analyze market data to provide accurate price predictions.',
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Your data is protected with enterprise-grade security and privacy measures.',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get price predictions in seconds with our optimized prediction engine.',
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with car enthusiasts, dealers, and experts in our platform.',
    },
  ];

  const stats = [
    { icon: Car, value: '500K+', label: 'Cars Analyzed' },
    { icon: DollarSign, value: '98%', label: 'Accuracy Rate' },
    { icon: Users, value: '50K+', label: 'Happy Users' },
    { icon: BarChart3, value: '24/7', label: 'Market Monitoring' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Car Buyer',
      content: 'CarPredictor helped me find the perfect car at the right price. The predictions were spot-on!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    },
    {
      name: 'Mike Chen',
      role: 'Car Dealer',
      content: 'As a dealer, this platform helps me price my inventory competitively. Highly recommended!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    },
    {
      name: 'Emily Davis',
      role: 'Car Seller',
      content: 'Sold my car quickly at the predicted price. The accuracy is impressive!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Predict Car Prices with
              <span className="text-blue-600 block">AI Precision</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get accurate car valuations powered by advanced machine learning. 
              Whether you're buying, selling, or just curious, make informed decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/predict"
                className="btn btn-primary text-lg px-8 py-4 group"
              >
                Try Price Predictor
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/browse"
                className="btn btn-outline text-lg px-8 py-4"
              >
                Browse Cars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CarPredictor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with comprehensive market data 
              to deliver the most accurate car price predictions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card hover:shadow-lg group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get accurate car price predictions in just three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enter Car Details</h3>
              <p className="text-gray-600">
                Provide basic information about the car including make, model, year, mileage, and condition.
              </p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze market data, trends, and comparable sales to calculate the price.
              </p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Results</h3>
              <p className="text-gray-600">
                Receive an accurate price prediction with detailed insights and market analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust CarPredictor for accurate car valuations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who rely on CarPredictor for accurate car price predictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Sign Up Free
            </Link>
            <Link
              to="/predict"
              className="btn bg-blue-700 text-white hover:bg-blue-800 text-lg px-8 py-4"
            >
              Try Predictor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}