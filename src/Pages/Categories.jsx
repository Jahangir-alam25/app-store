import React from 'react';
import Category from './Category';



const Categories= ({ apps }) => {
  const categories = ['Productivity', 'Health', 'Education'];

  return (
    <section className="">
      {categories.map(category => {
        const filteredApps = apps.filter(app => app.category === category);
        return (
          <Category key={category} title={category} apps={filteredApps} />
        );
      })}
    </section>
  );
};

export default Categories;
