import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Looks from "./Components/Looks/Looks.jsx";
import Lancamentos from "./components/Lancamentos/Lancamentos.jsx";
import Novidades from "./components/Novidades/Novidades.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
    
