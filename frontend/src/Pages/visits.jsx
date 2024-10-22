import React from 'react';

const Visits = () => {
  // Sample data for visits
  const visits = [
    { id: 1, propertyName: 'Urban Apartment', visitDate: '2024-10-20', status: 'Completed' },
    { id: 2, propertyName: 'Luxury Villa', visitDate: '2024-10-21', status: 'Upcoming' },
    { id: 3, propertyName: 'Commercial Space', visitDate: '2024-10-22', status: 'Pending' },
    { id: 4, propertyName: 'Beachfront Condo', visitDate: '2024-10-25', status: 'Completed' },
    { id: 5, propertyName: 'Countryside Cottage', visitDate: '2024-10-28', status: 'Upcoming' },
    { id: 6, propertyName: 'Downtown Loft', visitDate: '2024-11-01', status: 'Pending' },
    { id: 7, propertyName: 'Mountain Retreat', visitDate: '2024-11-05', status: 'Completed' },
    { id: 8, propertyName: 'Charming Bungalow', visitDate: '2024-11-10', status: 'Upcoming' },
    { id: 9, propertyName: 'City Center Studio', visitDate: '2024-11-15', status: 'Pending' },
    { id: 10, propertyName: 'Elegant Townhouse', visitDate: '2024-11-18', status: 'Completed' },
    { id: 11, propertyName: 'Suburban Family Home', visitDate: '2024-11-20', status: 'Upcoming' },
    { id: 12, propertyName: 'Penthouse Suite', visitDate: '2024-11-22', status: 'Pending' },
    { id: 13, propertyName: 'Lakefront Property', visitDate: '2024-11-25', status: 'Completed' },
    { id: 14, propertyName: 'Historic Mansion', visitDate: '2024-12-01', status: 'Upcoming' },
    { id: 15, propertyName: 'Modern Farmhouse', visitDate: '2024-12-05', status: 'Pending' },
    { id: 16, propertyName: 'Cozy Cabin', visitDate: '2024-12-10', status: 'Completed' },
    { id: 17, propertyName: 'Industrial Loft', visitDate: '2024-12-12', status: 'Upcoming' },
    { id: 18, propertyName: 'Luxury Yacht', visitDate: '2024-12-15', status: 'Pending' },
    { id: 19, propertyName: 'Rural Homestead', visitDate: '2024-12-20', status: 'Completed' },
    { id: 20, propertyName: 'Urban Warehouse', visitDate: '2024-12-25', status: 'Upcoming' },
  ];

  return (
    <div className="container mx-auto p-4 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">My Visits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visits.map((visit) => (
          <div
            key={visit.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold">{visit.propertyName}</h2>
              <p className="text-gray-700 mt-2">Visit Date: {visit.visitDate}</p>
              <div className="mt-4">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    visit.status === 'Completed'
                      ? 'bg-green-500 text-white'
                      : visit.status === 'Upcoming'
                      ? 'bg-blue-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}
                >
                  {visit.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visits;
