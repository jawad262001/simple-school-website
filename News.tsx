import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useAnnouncements } from '../hooks/useAnnouncements';
import { useEvents } from '../hooks/useEvents';

const News = () => {
  const { announcements, loading: announcementsLoading } = useAnnouncements();
  const { events, loading: eventsLoading } = useEvents();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Latest News & Events
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings at Westfield Academy, 
            from student achievements to upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent News</h3>
            {announcementsLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading news...</p>
              </div>
            ) : (
              <div className="space-y-8">
                {announcements.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No news articles available at the moment.</p>
                  </div>
                ) : (
                  announcements.slice(0, 3).map((article, index) => (
                    <div 
                      key={article.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={article.image_url || "https://images.pexels.com/photos/5212681/pexels-photo-5212681.jpeg"}
                            alt={article.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                              {article.category}
                            </span>
                            <div className="flex items-center text-gray-500 text-sm gap-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(article.published_at || article.created_at)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                3 min read
                              </div>
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">
                            {article.title}
                          </h4>
                          
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {article.excerpt || article.content.substring(0, 150) + '...'}
                          </p>
                          
                          <button className="text-blue-700 font-medium hover:text-blue-800 flex items-center gap-2 transition-colors duration-200">
                            Read More
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
            <div className="bg-white rounded-xl shadow-lg p-6">
              {eventsLoading ? (
                <div 
                  className="text-center py-8"
                >
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700 mx-auto"></div>
                  <p className="mt-2 text-gray-600">Loading events...</p>
                </div>
              ) : events.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No upcoming events scheduled.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {events.slice(0, 4).map((event, index) => (
                    <div key={event.id} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-b-0">
                      <div className="bg-blue-100 text-blue-800 text-center p-2 rounded-lg min-w-0">
                        <div className="text-xs font-medium whitespace-nowrap">
                          {formatEventDate(event.event_date)}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {event.start_time ? `${event.start_time}${event.end_time ? ` - ${event.end_time}` : ''}` : 'All Day'}
                        </p>
                        {event.location && (
                          <p className="text-gray-500 text-xs mt-1">{event.location}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <button className="w-full mt-6 bg-blue-50 text-blue-700 py-3 px-4 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-200">
                View Full Calendar
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                  Student Portal
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                  Parent Resources
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                  Academic Calendar
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                  Library Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;