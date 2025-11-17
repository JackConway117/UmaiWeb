import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExploreDishes from "./components/ExploreDishes";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import AboutUsSection from "./components/AboutUsSection";


function App() {
 
  const getPath = () => (typeof window !== "undefined" ? window.location.pathname : "/");
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
          <>
            <HeroSection />
            <ExploreDishes />
            <AboutUsSection />
            <DownloadSection />
          </>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
