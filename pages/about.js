import React from 'react';
import RecomendedCard from '@/components/recomendedCard';
import PopularCard from '@/components/popularCard';
import Header from '@/components/header';

const About = () => {
  return (
  <div>
    <Header/>
    <div className="container mx-auto px-1 sm:px-8 md:px-16 lg:px-24 xl:px-12 mt-10 flex flex-col h-screen">
    <h5 className="text-2xl font-bold tracking-tight text-white px-2">Recomended</h5>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 mt-10">
          <RecomendedCard />
          <RecomendedCard />
          <RecomendedCard />
          <RecomendedCard />
          <RecomendedCard />
          <RecomendedCard />
          <RecomendedCard />
          <RecomendedCard />
        </div>
      </div>
      <div className="container mx-auto px-1 sm:px-8 md:px-16 lg:px-24 xl:px-12 mt-40 flex flex-col h-screen  ">
        <h5 className="text-2xl font-bold tracking-tight text-white px-2">Popular</h5>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 mt-10">
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>
      </div>
  );
};

export default About;