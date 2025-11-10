import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import Home from "../../Pages/Home/Home";
import useAxios from "../../Hooks/useAxios";
import FilteredCategory from "../../Components/FilteredCategory/FilteredCategory";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";




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
        }

    ]

}])
export default router;