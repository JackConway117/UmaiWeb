import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExploreDishes from "./components/ExploreDishes";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Register from "./pages/Register";
import ReviewComponent from "./components/ReviewComponent";


function App() {
 
  const getPath = () => (typeof window !== "undefined" ? window.location.pathname : "/");
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const isRoot = path === "/" || path === "";
  const isRegister = path === "/register";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {isRoot ? (
          <>
            <HeroSection />
            <ExploreDishes />
            <ReviewComponent />
            <DownloadSection />
            

          </>
        ) : isRegister ? (
          <Register />
        ) : (
          <NotFound />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
