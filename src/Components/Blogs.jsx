import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  const articles = [
    {
      id: 1,
      title: "Top 5 Productivity Apps for 2025",
      summary: "Boost your workflow with these hand-picked apps designed to keep you focused and organized.",
      date: "May 5, 2025"
    },
    {
      id: 2,
      title: "How to Spot a Secure App",
      summary: "Not all apps are created equal. Learn how to identify safe downloads on any platform.",
      date: "April 28, 2025"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>Blogs - AppStore</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">App Insights & Tips</h1>
      {articles.map(article => (
        <div key={article.id} className="mb-6 p-6 bg-white shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700">{article.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{article.date}</p>
          <p className="text-gray-700">{article.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;


