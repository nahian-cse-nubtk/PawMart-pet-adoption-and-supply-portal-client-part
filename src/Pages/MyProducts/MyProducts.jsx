import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";


const MyProducts = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading]= useState(false);

  const modalRef = useRef();

  const [formData, setFormData] = useState({});
  const [id, setId] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/categories?email=${user?.email}`)
      .then((data) =>{
        setProducts(data.data)
        setTimeout(()=>{
          setLoading(false);
        },500)

      } );
  }, [axios, user?.email]);


  const handleEditButton = (id) => {
    axios.get(`/categories/${id}`).then((data) => {
      setId(data.data._id);
      setFormData({
        name: data.data.name,
        category: data.data.category,
        price: data.data.price,
        location: data.data.location,
        description: data.data.description,
        image: data.data.image,
        date: data.data.date,
        email: user?.email,
      });
    });
    modalRef.current.showModal();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category" && value === "Pets (Adoption)") {
      setFormData({ ...formData, category: value, price: 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.patch(`/categories/${id}`, formData).then((data) => {
      if (data.data.matchedCount) {
        toast("Update Successful");
        modalRef.current.close();
        window.location.reload();
      }
    });
  };
if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
      <Loading></Loading>
      </div>
    );
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`/categories/${id}`).then((data) => {
      if (data.data.deletedCount) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const remainingData = products.filter((product) => id !== product._id);
        setProducts(remainingData);
      }
    });


      }
    });

  };



  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Basic Info</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={product.image} alt="Product Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-50">
                        {product.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <div className="flex justify-center gap-3">
                    <button onClick={() => handleEditButton(product._id)}>
                      <FaEdit size={25} />
                    </button>
                    <button onClick={() => handleDelete(product._id)}>
                      <MdDelete size={25} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <motion.div
            className="max-w-3xl mx-auto p-8 rounded-3xl shadow-lg bg-linear-to-br from-amber-50 to-amber-100 dark:bg-linear-to-br dark:from-gray-600 dark:to-gray-700 border border-amber-300/40 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-amber-700 dark:text-gray-200 mb-6 text-center">
              Update Product Details
            </h2>

            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Product / Pet Name */}
              <div className="col-span-1">
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Product / Pet Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500 bg-white/60 dark:bg-gray-400 backdrop-blur-md"
                />
              </div>

              {/* Category */}
              <div className="col-span-1">
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:ring-gray-500 bg-white/60 dark:bg-gray-400 backdrop-blur-md"
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
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  placeholder="Enter price"
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500 bg-white/60 dark:bg-gray-400 backdrop-blur-md"
                  readOnly={formData.category === "Pets"}
                />
              </div>

              {/* Location */}
              <div className="col-span-1">
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500 bg-white/60 dark:bg-gray-400 backdrop-blur-md"
                />
              </div>

              {/* Image URL */}
              <div className="col-span-1">
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500 bg-white/60 dark:bg-gray-400 backdrop-blur-md"
                />
              </div>

              {/* Date */}
              <div className="col-span-1">
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-gray-500 bg-white/60 dark:bg-gray-400 backdrop-blur-md"
                />
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write about your pet or product..."
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:ring-gray-500 bg-white/60 dark:bg-gray-400 backdrop-blur-md h-28"
                />
              </div>

              {/* Email (readonly) */}
              <div className="col-span-2">
                <label className="block text-amber-800 dark:text-gray-200 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  Value={formData.email}
                  defaultValue={user?.email}
                  readOnly
                  className="w-full p-3 rounded-lg border border-amber-300 dark:border-gray-400 bg-gray-100 dark:bg-gray-400 text-gray-600 cursor-not-allowed"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="col-span-2 py-3 px-6 bg-amber-500 dark:bg-gray-400 hover:bg-amber-600 dark:hover:bg-gray-500 text-white rounded-xl font-semibold shadow-md transition-all duration-200"
              >
                Update
              </motion.button>
            </form>
          </motion.div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MyProducts;
