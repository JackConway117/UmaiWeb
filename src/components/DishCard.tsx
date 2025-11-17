import { useEffect } from "react";

type DishCardProps = {
  name: string;
  restaurant: string;
  rating: number;
  totalRatings: number;
  videoUrl?: string; 
};

export default function DishCard({
  name,
  restaurant,
  rating,
  totalRatings,
  videoUrl,
}: DishCardProps) {

  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  
  const videoId = videoUrl?.split("/video/")[1]?.split("?")[0];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full">
      
    
      <div className="rounded-xl overflow-hidden bg-black flex justify-center">
        {videoId ? (
          <blockquote
            className="tiktok-embed"
            cite={videoUrl}
            data-video-id={videoId}
            style={{ width: "100%", maxWidth: "350px", minWidth: "250px" }}
          ></blockquote>
        ) : (
          <div className="w-full h-40 flex items-center justify-center text-sm text-gray-400">
            Sin video
          </div>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{restaurant}</p>

      <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
         {rating} ({totalRatings})
      </div>
    </div>
  );
}
