// import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Looks from "./components/Looks";
import Lancamentos from "./components/Lancamentos";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Looks />
      <Lancamentos />
      <Novidades/>
      <Footer/>
      
    </>
  );
}

export default App;
