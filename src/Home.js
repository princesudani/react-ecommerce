import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
// import styled from "styled-components";

const Home = () => {
  const data = {
    name: "MY POPSHOP",
  };

  return <>
    <HeroSection mydata={data} />
    <Services/>
    <Trusted/>
  </>;
};

// const Wrapper = styled.section`
//   height:100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;

export default Home;
