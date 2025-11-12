import { motion } from "framer-motion";

export default function PetHeroes() {
  const heroes = [
    {
      name: "Ayesha Rahman",
      role: "Adopted Bella 🐶",
      img: "https://corporateengineering.com.bd/wp-content/uploads/2024/06/Man-4.jpg",
      story:
        "Bella was rescued from the streets of Dhaka. Now she enjoys long walks and endless cuddles with her new family."
    },
    {
      name: "Rafiul Hasan",
      role: "Adopted Simba 🐱",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMgL1PM7c72yf8be4WrwmpBSY2qgG_PtftQ&s",
      story:
        "Simba was shy at first, but with love and care, he turned into the most affectionate cat ever!"
    },
    {
      name: "Nadia Karim",
      role: "Pet Foster Volunteer 🐾",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
      story:
        "Nadia has helped foster over 10 pets this year, ensuring they get the warmth and care they deserve."
    },
    {
      name: "Sakib Ahmed",
      role: "Rescued Bruno 🦴",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdQzr9zk5Li-1iYeCcHTWw7fUTkRRuO6s6g&s",
      story:
        "Bruno’s transformation from a timid puppy to a confident, playful friend shows the magic of compassion."
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-orange-50
            dark:bg-linear-to-b dark:from-gray-700 dark:to-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        🐕 Meet Our <span className="text-orange-600 dark:text-white">Pet Heroes</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {heroes.map((hero, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -8 }}
          >
            <img
              src={hero.img}
              alt={hero.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{hero.name}</h3>
              <p className="text-sm text-orange-500 dark:text-black font-medium mb-2">{hero.role}</p>
              <p className="text-sm text-gray-600 text-justify">{hero.story}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
