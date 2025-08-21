import React from 'react';
import { BookOpen, Beaker, Palette, Calculator, Globe, Music } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "English & Literature",
      description: "Develop critical thinking and communication skills through comprehensive literature studies.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "STEM Programs",
      description: "Hands-on science, technology, engineering, and mathematics courses with modern labs.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Arts & Design",
      description: "Express creativity through visual arts, digital design, and multimedia projects.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Advanced Mathematics",
      description: "From algebra to calculus, building strong mathematical foundations for success.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Social Studies",
      description: "Explore history, geography, and cultural studies to understand our world.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music & Performing Arts",
      description: "Develop artistic talents through choir, band, theater, and individual instruction.",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum is designed to challenge and inspire students 
            across all disciplines, preparing them for college and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg ${program.bgColor} ${program.color} mb-6`}>
                {program.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {program.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Advanced Placement & Honors
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Challenge yourself with our comprehensive AP and Honors program, 
                offering college-level coursework in over 15 subjects.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-700 mb-1">15+</div>
                  <div className="text-sm text-gray-600">AP Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Pass Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg"
                alt="Students studying"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;