import { motion } from "framer-motion";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

export default function AddProducts() {
  const {user}=useAuth();
  const secureAxios =useAxiosSecure();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    description: "",
    image: "",
    date: "",
    email: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;


    if (name === "category" && value === "Pets (Adoption)") {
      setFormData({ ...formData, category: value, price: 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    secureAxios.post('/categories',formData)
    .then(data=>{

        if(data.data.insertedId){
            toast("Your Product/pet is added to the list")
        }
    })


  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-8 rounded-3xl shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/40 mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">
        🐾 Add a Product / Pet
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Product / Pet Name */}
        <div className="col-span-1">
          <label className="block text-amber-800 font-medium mb-2">
            Product / Pet Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter name"
            className="w-full p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/60 backdrop-blur-md"
          />
        </div>

        {/* Category */}
        <div className="col-span-1">
          <label className="block text-amber-800 font-medium mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/60 backdrop-blur-md"
          >
            <option value="">Select Category</option>
            <option value="Pets (Adoption)">Pets (Adoption)</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Pet Care Products">Pet Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div className="col-span-1">
          <label className="block text-amber-800 font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            placeholder="Enter price"
            className="w-full p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/60 backdrop-blur-md"
            readOnly={formData.category === "Pets"}
          />
        </div>

        {/* Location */}
        <div className="col-span-1">
          <label className="block text-amber-800 font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter location"
            className="w-full p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/60 backdrop-blur-md"
          />
        </div>

        {/* Image URL */}
        <div className="col-span-1">
          <label className="block text-amber-800 font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="https://example.com/image.jpg"
            className="w-full p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/60 backdrop-blur-md"
          />
        </div>

        {/* Date */}
        <div className="col-span-1">
          <label className="block text-amber-800 font-medium mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/60 backdrop-blur-md"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-amber-800 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Write about your pet or product..."
            className="w-full p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/60 backdrop-blur-md h-28"
          />
        </div>

        {/* Email (readonly) */}
        <div className="col-span-2">
          <label className="block text-amber-800 font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            Value={formData.email}
            defaultValue={user?.email}
            readOnly
            className="w-full p-3 rounded-lg border border-amber-300 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="col-span-2 py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold shadow-md transition-all duration-200"
        >
          🐕 Submit Product
        </motion.button>
      </form>
    </motion.div>
  );
}
