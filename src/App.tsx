import React from "react";
//! components
import "./App.scss";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Tours } from "./components/Tours";
import { Footer } from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
