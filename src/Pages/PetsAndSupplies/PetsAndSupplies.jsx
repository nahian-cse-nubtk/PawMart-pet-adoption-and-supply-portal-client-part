import React, { useEffect, useRef, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Catagory from "../../Components/Catagory/Catagory";
import { FaAngleDown } from "react-icons/fa";
import ResultNotFound from "../../Components/ResultNotFound/ResultNotFound";
import Loading from "../../Components/Loading/Loading";

const PetsAndSupplies = () => {
  const [products, setProducts] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const serachRef = useRef();
  useEffect(() => {
    setLoading(true)
    axios.get("/categories").then((data) => {
      setProducts(data.data);
      setAllProduct(data.data);
      setTimeout(()=>{
        setLoading(false)
      },500)
    });

    axios.get("/onlycategories").then((data) => {
      setCategories(data.data);
    });
  }, [axios]);
  if (loading) {
      return (
        <div>
        <Loading></Loading>
        </div>
      );
    }

  const handleFilterCategory = (category) => {
    setLoading(true);

    const filtered = allProduct.filter(
      (product) => product.category === category
    );
    setProducts(filtered);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };
  const handleShowAll = () => {
    setLoading(true);
    setProducts(allProduct);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };
  const handleSearch =()=>{
    const value = serachRef.current.value;
    const filteredData = allProduct.filter(data=>data.name.toLowerCase().includes(value.toLowerCase()))

    if(filteredData){
      setProducts(filteredData)
    }



  }

  return (
    <div className="p-5">
      <h1 className=" my-5 text-5xl font-bold text-center">
        All the Pets and Supplies are Here
      </h1>
      <div className="flex justify-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter By Category <FaAngleDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={handleShowAll}>All</button>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <button onClick={() => handleFilterCategory(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="flex justify-end mt-3">
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input ref={serachRef} onChange={handleSearch} type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      {
        products.length===0&&<ResultNotFound></ResultNotFound>
      }
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.length!==0&& products.map((product) => (
          <Catagory key={product._id} product={product}></Catagory>
        ))
      }
      </div>
    </div>
  );
};

export default PetsAndSupplies;
