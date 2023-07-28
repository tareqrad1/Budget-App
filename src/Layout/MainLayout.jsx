import React from "react";
import Navbar from "../Components/SectionsComponent/Navbar";
import LandingPage from "../Components/SectionsComponent/LandingPage";
import Papers from "../Components/Cards/Papers";
import Tabs from "../Components/Tabs/Tabs";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Papers />
      <Tabs />
    </>
  );
};

export default MainLayout;
