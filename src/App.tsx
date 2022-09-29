import React from "react";
//! components
import { Modal } from "./components/Modal/";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { SuggestSpot } from "./components/SuggestSpot";
import { Footer } from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//! hooks
import { useCheckDevice } from "@/hooks/useCheckDevice";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { isMobile } = useCheckDevice();
  const [loaded, setLoaded] = React.useState<boolean>();
  const [inVisible, setInVisible] = React.useState<boolean>(false);
  React.useEffect(() => {
    setLoaded(isMobile !== undefined);
  }, [isMobile]);

  React.useEffect(() => {
    if (!loaded) return;
    setTimeout(() => {
      setInVisible(true);
    }, 1000);
  }, [loaded]);

  React.useEffect(() => {
    document.title = "タイトルテスト";
  }, []);
  return (
    <div className="App">
      <Header />
      <Introduction />
      <SuggestSpot />
      {/* <Footer /> */}
      {!inVisible && <Modal loaded={loaded} />}
    </div>
  );
}

export default App;
