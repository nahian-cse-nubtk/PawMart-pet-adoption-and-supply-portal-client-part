import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Catagory from "../../Components/Catagory/Catagory";
import { FaAngleDown } from "react-icons/fa";

const PetsAndSupplies = () => {
  const [products, setProducts] = useState([]);
  const [allProduct,setAllProduct]= useState([])
  const [categories, setCategories]=useState([]);
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  useEffect(() => {
    axios.get("/categories").then((data) =>{
        setProducts(data.data)
        setAllProduct(data.data)
    }
    );



    axios.get('/onlycategories')
        .then(data=>{
            setCategories(data.data);

        })
  }, [axios]);
  if(loading){
    return <>
   <div className="flex justify-center items-center h-screen bg-amber-100">
        <p className="text-2xl font-semibold text-amber-600 animate-pulse">
          Loading...
        </p>
      </div>
      </>
  }

  const handleFilterCategory =(category)=>{
    setLoading(true);

    const filtered = allProduct.filter(product=>product.category===category)
    setProducts(filtered)

    setTimeout(() => {
          setLoading(false);
        }, 300);

  }
  const handleShowAll=()=>{
    setLoading(true);
    setProducts(allProduct);
    setTimeout(() => {
          setLoading(false);
        }, 300);
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
            {
                categories.map((category,index)=><li key={index}>
              <button onClick={()=>handleFilterCategory(category)}>{category}</button>
            </li>)
            }


          </ul>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Catagory key={product._id} product={product}></Catagory>
        ))}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
