import { motion } from "framer-motion";
import { Heart, PawPrint, Home, Smile } from "lucide-react";

export default function WhyAdopt() {
  const reasons = [
    {
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      title: "Save a Life",
      text: "Every adoption helps reduce the number of homeless pets and gives an animal a second chance at love and life."
    },
    {
      icon: <Home className="w-10 h-10 text-amber-500" />,
      title: "Find True Companionship",
      text: "Adopted pets form the deepest bonds — they remember kindness and return it a hundredfold."
    },
    {
      icon: <Smile className="w-10 h-10 text-green-500" />,
      title: "Affordable & Ethical",
      text: "Choosing adoption over buying promotes compassion and discourages unethical breeding."
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-orange-50 to-orange-200
            dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-700 text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🐾 Why Adopt from <span className="text-orange-600 dark:text-white">PawMart?</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-white max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Instead of buying, rescue a pet in need. Each adoption story creates a ripple of kindness — one tail wag, one heart healed at a time.
      </motion.p>

      <div className="grid md:grid-cols-3 md:px-0 px-5 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white dark:bg-gray-400 shadow-lg rounded-2xl hover:shadow-xl transition-all border border-orange-100"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-white text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
