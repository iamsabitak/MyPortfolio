import React from "react";
import "../index.css";
import TextContent from "../home/TextContent";
import PortfolioImg from "../home/PortfolioImg";
function Home() {
  return (
    <section className="home" id="home">
      <TextContent />
      <PortfolioImg />
    </section>
  );
}

export default Home;
