import React from 'react'
import HeroSection from './Components/HeroSection';

function About() {
  const data = {
    name: "Responsive Web Design",
    image: "./logo1.png",

  };
  return <HeroSection {...data} />;
};

export default About;