import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Looks from "./components/Looks/Looks";
import Lancamentos from "./components/Lancamentos/Lancamentos";
import Novidades from "./components/Novidades/Novidades";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    
      <Header />
      <Banner />
      <Looks/>
      <Lancamentos />
      <Novidades/>
      <Footer/>
      
    </>
  );
}

export default App;
    
