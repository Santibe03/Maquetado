import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import BodyMenu from "./BodyMenu"
import Proyecto from "./../assets/imagenes/proyect.png"

const App = () => {
  return (
    <>
      <Header />
      <div>
        <BodyMenu />
        <section className="section1">
          <img src={Proyecto} alt="" className="image" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;

