import React from "react";
//! components
import { Header } from "./components/Header";
import { Top } from "./components/Top";
import { About } from "./components/About";
import { Tours } from "./components/Tours";
import { Footer } from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  React.useEffect(() => {
    document.title = "タイトルテスト";
  }, []);
  return (
    <div className="App">
      <Header />
      <Top />
      <About />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
