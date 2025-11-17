import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    };

    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(scrollToSection, 80);
    } else {
      scrollToSection();
    }
  };

  const pinkMain = "#F4B6B6";
  const pinkHover = "#F19292";

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 italic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1
              className="text-2xl md:text-3xl font-bold cursor-pointer italic"
              style={{ color: pinkMain }}
              onClick={() => handleNavClick("inicio")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNavClick("inicio");
                }
              }}
              aria-label="Ir al inicio"
            >
              UMAI
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "descargas", label: "Descargas" },
              { id: "explora", label: "Explora" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 transition-colors font-medium italic"
                onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 italic">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "descargas", label: "Descargas" },
              { id: "explora", label: "Explora" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-gray-700 transition-colors font-medium italic"
                onMouseEnter={(e) => (e.currentTarget.style.color = pinkHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
