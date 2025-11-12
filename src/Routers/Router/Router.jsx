import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import Home from "../../Pages/Home/Home";

import FilteredCategory from "../../Components/FilteredCategory/FilteredCategory";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import PetsAndSupplies from "../../Pages/PetsAndSupplies/PetsAndSupplies";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import PrivateRouter from "../PivateRouter/PrivateRouter";
import Error404page from "../../Components/Error404page/Error404page";
import ProductNotFound from "../../Components/ProductNotFound/ProductNotFound";




const router = createBrowserRouter([{
    path: '/',
    Component: Root,
    children:[
        {
            index: true, Component: Home
        },
        {
            path: '/categories/:categoryName',
            Component: FilteredCategory
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/add-listing',
            element: <PrivateRouter><AddProducts></AddProducts></PrivateRouter>
        },
        {
            path: '/my-listings',
            element: <PrivateRouter><MyProducts></MyProducts></PrivateRouter>
        },
        {
            path: '/pets-supplies',
            Component: PetsAndSupplies
        },
        {
            path: '/product/:productId',
            element:<PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
            errorElement: <ProductNotFound></ProductNotFound>
        },
        {
            path: '/my-orders',
            element: <PrivateRouter><MyOrders></MyOrders></PrivateRouter>
        }

    ]

},
{
    path: '*',
    Component: Error404page
}
])
export default router;