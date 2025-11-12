import { jsPDF } from "jspdf";
import "jspdf-autotable"

import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";



const MyOrders = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading,setLoading]= useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/orders?email=${user?.email}`)
      .then((data) =>{
        setOrders(data.data)
        setTimeout(()=>{
          setLoading(false);
        },500)
      } );
  }, [axios, user?.email]);


  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text("PawMart Orders Report", 14, 20);

    const tableColumn = ["#", "Product", "Category", "Price", "Qty", "Date"];
    const tableRows = orders.map((o, i) => [
      i + 1,
      o.productName,
      o.category,
      `$${o.price}`,
      o.quantity,
      new Date(o.date).toLocaleDateString(),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });
    toast("Download is started")
    doc.save("PawMart_Report.pdf");
  };

if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
      <Loading></Loading>
      </div>
    );
  }


  return (
    <div className="overflow-x-auto">
        <div className="flex justify-end mr-3">
        <button
        onClick={handleDownloadPDF}
          className="mt-4 flex items-center gap-2 bg-amber-500 dark:bg-gray-500 hover:bg-amber-600 dark:hover:bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition-all"
        >
          🧾 Download Report
        </button>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Buyer Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Date</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.productName}</td>
              <td>{order.buyerName}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.addresss}</td>
              <td>{order.date}</td>
              <td>{order.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default MyOrders;
