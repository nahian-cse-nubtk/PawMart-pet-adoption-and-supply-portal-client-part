import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import Home from "../../Pages/Home/Home";

import FilteredCategory from "../../Components/FilteredCategory/FilteredCategory";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import MyProducts from "../../Components/MyProducts/MyProducts";
import PetsAndSupplies from "../../Pages/PetsAndSupplies/PetsAndSupplies";




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
            Component: AddProducts
        },
        {
            path: '/my-listings',
            Component: MyProducts
        },
        {
            path: '/pets-supplies',
            Component: PetsAndSupplies
        }

    ]

}])
export default router;