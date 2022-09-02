
import HeroSection from './Components/HeroSection';

import { useContext } from 'react';

const Home = () => {


  const data = {
    name: "AFOUR Technologies",
    image: "./Computer-Logo-Designs.jpg",
  };

  return <HeroSection {...data} />;

};

export default Home;