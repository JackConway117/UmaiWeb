import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const pinkMain = "#F4B6B6";
  const pinkHover = "#F19292";
  const pinkLight = "#FADCDC";
  const [fav, setFav] = useState(false);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center overflow-hidden relative pt-10 md:pt-30"
      style={{
        background: `linear-gradient(135deg, ${pinkLight}, #F7AFA0, ${pinkMain})`,
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
              Versión demo · Interfaz móvil
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight drop-shadow-sm italic">
            Presentamos UMAI — la app demo para descubrir restaurantes y menús
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
            Muestra la interfaz móvil, las funciones clave y la facilidad de
            navegación. Ideal para presentar a inversionistas o clientes. Esto
            es una demo, no un servicio de entrega.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
            <button
              onClick={() => {
                const el = document.getElementById("descargas");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-2 text-white rounded-full font-medium text-base shadow-md transition-transform transform hover:-translate-y-0.5 italic"
              style={{
                background: `linear-gradient(90deg, ${pinkMain}, ${pinkHover})`,
              }}
            >
              Ver Demo
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("explora");
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
          
          {/* Imagen del plato detrás */}
          <motion.img
            src="/foto_plato.png"
            alt="Decoración plato de comida"
            className="absolute top-[20%] right-[18%] w-[22rem] h-[22rem] rounded-full object-cover opacity-80 blur-[0.5px] pointer-events-none select-none mix-blend-multiply"
            initial={{ scale: 0.95, opacity: 0.7 }}
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Mockup del teléfono */}
          <motion.div
            className="relative w-[clamp(15rem,24vw,12rem)] shadow-2xl rounded-3xl"
            initial={{ scale: 0.98, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            <div
              className="mx-auto bg-black rounded-3xl p-2"
              style={{ aspectRatio: "9/19" }}
            >
              <div className="bg-white rounded-2xl h-full overflow-hidden relative flex flex-col">
                {/* Imagen de fondo dentro del teléfono */}
                <img
                  src="/fondo.png"
                  alt="Vista previa de la app"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
