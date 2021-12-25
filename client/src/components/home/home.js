import React from "react";
import "./home.css";
import HeroCardCont from "../heroCardCont/heroCardCont";
import StockDetailsTable from "../stockDetailsTable/stockDetailsTable";

function Home() {
  return (
    <section className="homeSec">
      <HeroCardCont />
      <StockDetailsTable />
    </section>
  );
}

export default Home;
