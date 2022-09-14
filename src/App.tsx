import React from "react";
//! components
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
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
      <Introduction />
      {/* <Tours /> */}
      <Footer />
    </div>
  );
}

export default App;
