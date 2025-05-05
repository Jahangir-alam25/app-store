import React from 'react';
import AppSlider from './AppSlider';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';
import Categories from './Categories';

const Home = () => {
    const apps = useLoaderData()
    return (
        <div>
          <AppSlider></AppSlider>
          <TrendingApps apps={apps}></TrendingApps>
          <Categories apps={apps}></Categories>
        </div>
    );
};

export default Home;