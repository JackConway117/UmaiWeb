import { useState } from "react";
import EscenaSpline from "./iphone"; 
import DownloadSection from "./DownloadSection";

export default function HeroSection() {
  const pinkMain = "#FF7B7B";
  const pinkHover = "#F19292";
  const pinkLight = "#FADCDC";
  const downloadButton = "#2196f3";
  const [fav, setFav] = useState(false);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center overflow-hidden relative pt-10 md:pt-30"
      style={{
        background: `linear-gradient(135deg, ${pinkLight}, #FF7B7B, ${pinkMain})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
        
        {/* Left: promoción */}
        <div className="space-y-5 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold italic">
              Nueva
            </div>
            <div className="text-xs text-gray-500 italic">
              App Movil
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm italic">
            Presentamos UMAI
          </h1>

          <p className="text-base md:text-lg text-black+ leading-relaxed italic">
            La única guía de restaurantes donde "comer con los ojos" es solo el primer paso.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
            <button
              onClick={() => {
                const el = document.getElementById("descargas");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-2 text-white rounded-full font-medium text-base shadow-md transition-transform transform hover:-translate-y-0.5 italic"
              style={{
                background: `linear-gradient(90deg, ${downloadButton}, ${downloadButton})`,
              }}
            >
              Descarga Ahora
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("sobre-nosotros");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-2 bg-white rounded-full font-medium text-base shadow border transition-all hover:scale-105 italic"
              style={{ color: pinkMain, borderColor: pinkMain }}
            >
              Más información
            </button>
          </div>
        </div>

        {/* Right: mockup teléfono */}
        <div className="relative flex justify-center lg:justify-end z-10">
          
          <EscenaSpline />

        </div>
      </div>

      {/* === INICIO DE LA OLA === */}
      {/* Este elemento crea la forma de ola en la parte inferior. */}
      {/* Está posicionado absolutamente en la parte inferior (bottom-0) */}
      {/* y se estira al 100% del ancho (w-full). */}
      {/* El 'fill' debe ser del color de la SIGUIENTE sección (asumiendo blanco #FFFFFF). */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{ lineHeight: 0 }} // Previene espacio extra debajo del SVG
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320" // Define el lienzo de dibujo
          preserveAspectRatio="none"
          // La altura del SVG se controla aquí.
          // Puedes usar clases de Tailwind (h-24, h-32, h-40) o un style en línea.
          style={{ height: "150px", width: "100%", display: "block" }}
        >
          <path
            // Esta es la curva de la ola.
            // M0,250 -> Inicia a la izquierda, 250px desde el borde superior del SVG
            // C600,150 800,300 1440,200 -> Dibuja una curva de Bézier
            // L1440,320 -> Línea a la esquina inferior derecha
            // L0,320 -> Línea a la esquina inferior izquierda
            // Z -> Cierra la forma
            d="M0,1 C600,50 600,500 1440,200 L1440,320 L0,520 Z"
            fill="#FFFFFF" // Cambia esto si el fondo de tu siguiente sección no es blanco
          />
        </svg>
      </div>
      {/* === FIN DE LA OLA === */}

    </section>
  );
}