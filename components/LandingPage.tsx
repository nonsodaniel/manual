import React from "react";

import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="landing-page" data-testid="landing-page">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
