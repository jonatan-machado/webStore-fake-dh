import React from 'react';

import Banner from '../../components/Banner';
import GridHome from "../../components/GridHome";
import HomeFooter from "../../components/HomeFooter";

// import { Container } from './styles';

function Home() {
  return (
    <>
      <Banner />
      <GridHome />
      <HomeFooter />
    </>
  );
}

export default Home;