import { ChevronRight } from "lucide-react";
import DishCard from "./DishCard";

const dishes = [
  {
    name: "Costiyas",
    restaurant: "Le Costiyes",
    rating: 4.1,
    totalRatings: 2453,
    videoUrl: "https://vt.tiktok.com/ZSf1yDdtv/",
  },
  {
    name: "Tacos al Pastor",
    restaurant: "Tacos Hans",
    rating: 5,
    totalRatings: 892,
    videoUrl: "https://www.tiktok.com/@mexicook/video/7381938475828371923",
  },
  {
    name: "Pizza Pepperoni",
    restaurant: "Little Caesars",
    rating: 4.5,
    totalRatings: 1823,
    videoUrl: "https://www.tiktok.com/@pizza_lovers/video/7389274719274627283",
  },
 
];

export default function ExploreDishes() {
  const handleViewAll = () => {
    alert("Ver todos los platillos disponibles...");
  };

  return (
    <section id="explora" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explora tus antojos
          </h2>

          <button
            onClick={handleViewAll}
            className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
          >
            Ver Todo
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>

      </div>
    </section>
  );
}
