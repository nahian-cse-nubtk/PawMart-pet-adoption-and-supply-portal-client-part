import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    tagline: "Find Your Furry Friend Today!",
  },
  {
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1664300856267-710754126356?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000",
    tagline: "Because Every Pet Deserves Love and Care.",
  },
  {
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
    tagline: "Find your forever friend — love comes with fur, paws, and a heartbeat."
  },
  {
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
    tagline: "Every adoption tells a story — make yours one of kindness and companionship."

  }
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt="Pet Banner"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          key={slides[index].tagline}
          className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slides[index].tagline}
        </motion.h1>
        
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-orange-500 scale-110" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
