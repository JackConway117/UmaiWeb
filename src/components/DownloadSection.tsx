import { Apple, Play } from "lucide-react";

export default function DownloadSection() {
  const handleAppStore = () => {
    alert("Redirigiendo a App Store...");
  };

  const handlePlayStore = () => {
    alert("Redirigiendo a Google Play Store...");
  };

  return (
    
    <section id="descargas" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-8">
        
        
        <div className="max-w-xl mb-10 md:mb-0">
          <p className="text-amber-600 uppercase tracking-wider font-semibold mb-3 italic">
            Descarga nuestra aplicación y disfruta de la mejor experiencia gastronómica
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6 italic">
            ¡Empieza hoy y descubre lo fácil que es hacer crecer tu negocio desde la palma de tu mano! <br /> 
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
            Encuentra una gran variedad de puestos de comida, explora nuevos sabores y apoya a los negocios locales desde tu celular.
            Nuestra app te conecta con los mejores lugares para comer, con información detallada, menús actualizados y promociones exclusivas.
          </p>

         
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAppStore}
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition italic"
            >
              <Apple size={28} />
              <div className="text-left">
                <p className="text-xs italic">Download on the</p>
                <p className="text-lg font-semibold italic">App Store</p>
              </div>
            </button>

            <button
              onClick={handlePlayStore}
              className="flex items-center gap-3 bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 transition italic"
            >
              <Play size={28} className="text-green-600" />
              <div className="text-left">
                <p className="text-xs italic">GET IT ON</p>
                <p className="text-lg font-semibold italic">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="w-64 md:w-80 lg:w-96">
            <img
              src="/phone-preview.png"
              alt="App preview"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
