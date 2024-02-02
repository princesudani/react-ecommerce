import React from "react";
import HeroSection from "./components/HeroSection";
// import styled from "styled-components";

const Home = () => {
  const data = {
    name: "MY POPSHOP",
  };

  return <HeroSection mydata={data} />;
};

// const Wrapper = styled.section`
//   height:100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;

export default Home;
