import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

import Loading from "../Loading/Loading";

export default function ProductDetails() {
  const { user } = useAuth();


  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const modalRef = useRef();
  const id = useParams().productId;
  const navigate = useNavigate();

  const axios = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axios.get(`/categories/category/${id}`).then((data) =>{
        setProducts(data.data)
        setFormData({
    buyerName: user?.displayName,
    email: user?.email,
    productId: data.data?._id,
    productName: data.data?.name,
    quantity: data.data?.category == "Pets (Adoption)" ? 1 : "",
    price: data.data?.price || 0,
    address: "",
    date: "",
    phone: "",
    notes: "",})

    setTimeout(() => {
    setLoading(false);
  }, 500);

    } );
  }, [axios, id, user?.displayName, user?.email]);

  const { name, category, email, description, price, location, image } =
    product;



  if (loading) {
    return (
      <div>
      <Loading></Loading>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    axios.post('/orders', formData)
    .then(data=>{
        if(data.data.insertedId){
            toast('Your order is placed successfully')
            modalRef.current.close()
        }
    })
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-100 via-white to-amber-50 dark:bg-linear-to-b dark:from-gray-600 dark:via-black dark:to-gray-800 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white/70 dark:bg-gray-300 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-amber-200 dark:border-gray-400"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Section — Image */}
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover rounded-l-3xl"
            />
            <div className="absolute top-4 right-4 bg-amber-500 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              {category}
            </div>
          </div>

          {/* Right Section — Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-amber-700 dark:text-gray-700 mb-3">{name}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {description || "No description available."}
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-gray-700 font-medium">
                  <span className="font-semibold text-amber-600 dark:text-gray-600">
                    Owner Email:
                  </span>{" "}
                  {email}
                </p>
                <p className="text-gray-700 font-medium">
                  <span className="font-semibold text-amber-600 dark:text-gray-600">
                    Location:
                  </span>{" "}
                  {location}
                </p>
                <p className="text-gray-700 font-medium">
                  <span className="font-semibold text-amber-600 dark:text-gray-600">Price:</span>{" "}
                  {price > 0 ? `$${price}` : "Free Adoption ❤️"}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              onClick={() => modalRef.current.showModal()}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="mt-4 py-3 px-6 bg-amber-500 dark:bg-gray-500 hover:bg-amber-600 dark:hover:bg-gray-600 text-white rounded-xl font-semibold shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              🛒 {price > 0 ? "Order Now" : "Adopt Now"}
            </motion.button>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/70 px-3 py-1 rounded-full text-amber-600 dark:text-gray-600 shadow-sm hover:bg-white"
        >
          ← Back
        </button>
      </motion.div>
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">

            <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-amber-100 via-white to-amber-50 dark:bg-linear-to-b dark:from-gray-700 dark:via-black dark:to-gray-800 py-10 px-4">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl bg-white/70 backdrop-blur-lg border border-amber-200 shadow-xl rounded-3xl p-8 space-y-6"
              >
                <h2 className="text-3xl font-bold text-center text-amber-700 dark:text-gray-700 mb-4">
                  🐾 Adopt / Order
                </h2>

                {/* Buyer Info */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Buyer Name
                    </label>
                    <input
                      type="text"
                      name="buyerName"
                      value={formData.buyerName}
                      readOnly
                      className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 bg-gray-100 dark:bg-gray-500  text-gray-600 dark:text-gray-200 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      readOnly
                      className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 bg-gray-100 dark:bg-gray-500  text-gray-600 dark:text-gray-200 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Product Id
                    </label>
                    <input
                      type="text"
                      name="productId"
                      value={formData.productId}
                      readOnly
                      className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 bg-gray-100 dark:bg-gray-500  text-gray-600 dark:text-gray-200 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      readOnly
                      className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 bg-gray-100 dark:bg-gray-500  text-gray-600 dark:text-gray-200 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      min="1"
                      required
                      readOnly={product?.category === "Pets (Adoption)"}
                      className={`w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 ${
                        product?.category === "Pets (Adoption)"
                          ? "bg-gray-100 dark:bg-gray-500 text-gray-600 dark:text-gray-200 cursor-not-allowed"
                          : "bg-white dark:bg-gray-500 focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-600 "
                      }`}
                    />
                  </div>
                </div>

                {/* Price + Address + Date */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={
                        formData.price > 0
                          ? `$${formData.price}`
                          : "Free Adoption"
                      }
                      readOnly
                      className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 bg-gray-100 dark:bg-gray-500  text-gray-600 dark:text-gray-200 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Pick Up Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your pickup/delivery address"
                    rows="3"
                    className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special instructions or requests?"
                    rows="3"
                    required
                    className="w-full mt-1 p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="w-full py-3 bg-amber-500 dark:bg-gray-500 dark:hover:bg-gray-500 hover:bg-amber-600 text-white dark:text-gray-200 rounded-xl font-semibold text-lg shadow-md transition-all duration-200"
                >
                  🐾 Confirm{" "}
                  {product?.category === "Pets" ? "Adoption" : "Order"}
                </motion.button>
              </motion.form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
