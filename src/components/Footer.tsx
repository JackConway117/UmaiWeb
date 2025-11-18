import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const pinkMain = "#F4B6B6";
  const pinkHover = "#F19292";
  const pinkLight = "#FADCDC";

  return (
    <footer
      className="text-gray-800 py-12 md:py-16 italic"
      style={{
        background: `linear-gradient(135deg, ${pinkLight}, ${pinkMain})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
         
          <div>
            <h3
              className="text-2xl font-bold mb-6 italic"
              style={{ color: pinkHover }}
            >
              UMAI
            </h3>
            <p className="text-gray-700 italic">
              Explora los mejores puestos de comida, sabores locales y experiencias únicas.  
              Nuestra app celebra la cultura gastronómica y los negocios de comida auténtica.
            </p>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 italic">Explora</h4>
            <ul className="space-y-2 text-gray-700 italic">
              <li><a href="#" className="hover:text-gray-900 transition italic">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-gray-900 transition italic">Sobre Nosotros</a></li>
              <li><a href="#descargas" className="hover:text-gray-900 transition italic">Descargar</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 italic">Contáctanos</h4>
            <ul className="space-y-2 text-gray-700 italic">
              <li className="flex items-center gap-2 italic"><MapPin size={18} /> Durango, Dgo MX</li>
              <li className="flex items-center gap-2 italic"><Phone size={18} /> +52 55 1234 5678</li>
              <li className="flex items-center gap-2 italic"><Mail size={18} /> umai00@gmail.com</li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 italic">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-900 transition"><Facebook size={22} /></a>
              <a href="#" className="hover:text-gray-900 transition"><Instagram size={22} /></a>
              <a href="#" className="hover:text-gray-900 transition"><Twitter size={22} /></a>
            </div>
            <p className="mt-4 text-gray-700 text-sm italic">
              Únete a nuestra comunidad gastronómica y comparte tu pasión por la comida.
            </p>
          </div>
        </div>

        
        <div className="border-t border-pink-200 pt-8 text-center text-gray-700 italic">
          <p>
            &copy; 2025{" "}
            <span style={{ color: pinkHover }} className="font-semibold italic">
              UMAI
            </span>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
