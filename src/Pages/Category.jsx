import React from 'react'
import { Link } from 'react-router';


const Category = ({ title, apps }) => {
    return (
      <div className="my-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map(app => (
            <Link to={`/category/${app.id}`} key={app.id} className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-xl">
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
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Category;