import React from 'react';

// Sample props: Pass your JSON data as a prop named `apps`
const TrendingApps = ({ apps }) => {
  // রেটিং অনুযায়ী Descending order-এ sort করে শীর্ষ ৪টি অ্যাপ নিচ্ছি
  const trendingApps = [...apps]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="my-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🔥 Trending Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingApps.map(app => (
          <div key={app.id} className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-xl">
            <img
              src={app.thumbnail}
              alt={app.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{app.name}</h3>
              <p className="text-sm text-gray-500 mb-1">⭐ Rating: {app.rating}</p>
              <p className="text-sm text-gray-500">⬇️ Downloads: {app.downloads.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingApps;
