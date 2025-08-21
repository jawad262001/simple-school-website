import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-700" />,
      title: "Academic Excellence",
      description: "Our rigorous curriculum and dedicated faculty ensure every student reaches their full potential."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Community Focus",
      description: "We foster a supportive community where students, parents, and teachers work together."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      title: "Innovative Learning",
      description: "Modern teaching methods and technology integration prepare students for the future."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Character Development",
      description: "We emphasize values, leadership skills, and social responsibility alongside academics."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Westfield Academy
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Founded in 1985, Westfield Academy has been a cornerstone of educational excellence 
            for over three decades. We believe in nurturing the whole child through comprehensive 
            academic programs, character development, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To provide an exceptional educational experience that challenges students 
                academically, nurtures their creativity, and develops their character as 
                responsible global citizens.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  <span className="text-gray-700">Personalized learning experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Small class sizes for individual attention</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Comprehensive college preparation</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="Students in classroom"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;