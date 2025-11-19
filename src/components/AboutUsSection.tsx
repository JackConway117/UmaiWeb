import { motion } from "framer-motion";
// Importamos iconos relevantes para el equipo
import { Github, Linkedin } from "lucide-react";

// Datos de ejemplo para los miembros del equipo
const teamMembers = [
  {
    name: "Hector Jose Diaz Sandate",
    role: "Desarrollador Full Stack",
    bio: "Arquitecto de sistemas robustos y bases de datos, asegurando que la infraestructura de UMAI sea segura, escalable y de alto rendimiento.",
    image: "/images/Hector.jpg",
    github: "#",
    linkedin: "#",
  },
    {
    name: "Diego Martinez Ramirez",
    role: "Diseñador UX/UI",
    bio: "Enfocado en diseñar interfaces intuitivas, accesibles y estéticamente agradables que los usuarios amen.",
    image: "/images/Diego.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Alann Beltran Monarrez",
    role: "Desarrollador Full Stack y de videojuego",
    bio: "Desarrollador híbrido que combina la arquitectura web Full Stack con la lógica de videojuegos para crear experiencias interactivas únicas y envolventes.",
    image: "/images/Alann.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Jasiel Solis Garcia",
    role: "Diseñador UX/UI",
    bio: "Enfocada en diseñar interfaces intuitivas, accesibles y estéticamente agradables que los usuarios amen.",
    image: "/images/Jasiel.jpg",
    github: "#",
    linkedin: "#",
  },
    {
    name: "Emmanuel Graciano Santillan",
    role: "Desarrollador Web",
    bio: "Encargado del desarrollo front-end web, asegurando una experiencia de usuario.",
    image: "/images/Emmanuel.jpg",
    github: "#",
    linkedin: "#",
  },
];

export default function AboutUsSection() {
  // Tomamos el color principal de tu HeroSection para consistencia
  const pinkMain = "#F4B6B6";

  return (
    // Añadimos un ID por si quieres navegar aquí
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* --- 1. Información de la App --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sobre UMAI
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              UMAI nació de la idea de conectar a los amantes de la buena comida con los mejores restaurantes de la ciudad, todo a través de ofertas y descuentos exclusivos. Nuestra misión es hacer que descubrir y disfrutar sea más fácil y accesible.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos más que una app; somos una comunidad de "foodies" que valora la calidad, el ahorro y las nuevas experiencias gastronómicas. Esta demo es el primer paso de esa visión.
            </p>
          </div>
          
          {/* Placeholder para una imagen o gráfico de la app */}
         <motion.div
           className="rounded-2xl shadow-lg h-80 lg:h-96 overflow-hidden" // Mantenemos la animación y el estilo
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
         >
 
           <video
             className="w-full h-full object-cover" // object-cover se asegura que el video llene el espacio sin distorsionarse
             src="\video\videoUmai.mp4"
             controls
             loop
             autoPlay
             muted
             playsInline 
             
           >
             Tu navegador no soporta el tag de video.
           </video>
         </motion.div>
        </div>

        {/* --- 2. Información del Equipo --- */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Nuestro Equipo
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            El talento detrás de cada función, comprometidos con llevar esta demo al siguiente nivel.
          </p>

          <div className="flex flex-wrap gap-10 justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:max-w-sm"
              >
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4"
                    style={{ borderColor: pinkMain }} // Usamos el color de la marca
                  />
                  <p className="text-xl font-semibold text-gray-800">{member.name}</p>
                  <p className="font-medium" style={{ color: pinkMain }}>{member.role}</p>
                </div>

                <p className="text-gray-600 italic text-sm mb-6">
                  “{member.bio}”
                </p>

                {/* Enlaces Sociales */}
                <div className="flex justify-center gap-5">
                  <a href={member.github} className="text-gray-400 hover:text-gray-800 transition-colors" aria-label={`${member.name} Github`}>
                    <Github size={24} />
                  </a>
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}