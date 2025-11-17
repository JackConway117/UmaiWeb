// src/components/ReviewsSection.tsx
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sofía G.",
    comment:
      "La app es increíble. Encuentro promociones de mis restaurantes favoritos todos los días.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel R.",
    comment:
      "Me encanta poder descubrir nuevos lugares para comer y ver sus descuentos en segundos.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    name: "Camila V.",
    comment:
      "La interfaz es súper amigable, y las notificaciones me avisan justo cuando hay ofertas cerca.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "José M.",
    comment:
      "Muy práctica. Puedo filtrar por tipo de comida y precio, ideal para salir con amigos sin gastar de más.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Valeria T.",
    comment:
      "Gracias a esta app probé lugares nuevos con descuentos excelentes. Totalmente recomendada.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Andrés P.",
    comment:
      "El diseño es hermoso, las fotos se ven geniales y la experiencia es fluida. Una joya de app.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Opiniones sobre nuestra app
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre por qué miles de usuarios disfrutan encontrar sus comidas favoritas
          con descuentos exclusivos, de forma rápida y sencilla.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-orange-200"
                />
                <p className="font-semibold text-gray-800">{review.name}</p>
              </div>

              <div className="flex justify-center mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400 w-5 h-5"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                “{review.comment}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
