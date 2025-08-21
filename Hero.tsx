import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ApplicationModal from './ApplicationModal';

const Hero = () => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Tomorrow's
            <span className="text-blue-700"> Leaders</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Westfield Academy, we provide exceptional education that nurtures critical thinking, 
            creativity, and character development in a supportive learning environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => setIsApplicationModalOpen(true)}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-200 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Watch Tour
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
              <div className="text-gray-700">College Acceptance Rate</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1:12</div>
              <div className="text-gray-700">Teacher-Student Ratio</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-700">Extracurricular Activities</div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <ApplicationModal 
        isOpen={isApplicationModalOpen} 
        onClose={() => setIsApplicationModalOpen(false)} 
      />
    </>
  );
};

export default Hero;