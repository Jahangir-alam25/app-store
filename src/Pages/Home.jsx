import React from 'react';
import AppSlider from './AppSlider';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';
import Categories from './Categories';
import AppServices from './AppServices';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const apps = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>Home - AppStore</title>
      </Helmet>
      <AppSlider></AppSlider>
      <TrendingApps apps={apps}></TrendingApps>
      <Categories apps={apps}></Categories>
      <AppServices></AppServices>
    </div>
  );
};

export default Home;