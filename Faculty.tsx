import React from 'react';
import { Mail, Award, BookOpen } from 'lucide-react';
import { useTeachers } from '../hooks/useTeachers';

const Faculty = () => {
  const { teachers, loading } = useTeachers();

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Faculty
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of educators brings passion, expertise, and years of experience 
            to create an inspiring learning environment for every student.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading faculty...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.length === 0 ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No faculty information available at the moment.</p>
              </div>
            ) : (
              teachers.slice(0, 8).map((member, index) => (
                <div 
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img 
                    src={member.image_url || `https://images.pexels.com/photos/521231${7 + (index % 4)}/pexels-photo-521231${7 + (index % 4)}.jpeg`}
                    alt={`${member.first_name} ${member.last_name}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.first_name} {member.last_name}
                  </h3>
                  
                  <p className="text-blue-700 font-medium mb-1">
                    {member.position || 'Teacher'}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {member.department || 'General'}
                  </p>

                  <div className="space-y-2 mb-4">
                    {member.credentials && (
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Award className="h-4 w-4" />
                        {member.credentials}
                      </div>
                    )}
                    
                    {member.hire_date && (
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <BookOpen className="h-4 w-4" />
                        Since {new Date(member.hire_date).getFullYear()}
                      </div>
                    )}
                  </div>

                  <button className="w-full bg-blue-50 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Are you passionate about education and making a difference in students' lives? 
            We're always looking for dedicated educators to join our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
              View Open Positions
            </button>
            <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200">
              Submit Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;