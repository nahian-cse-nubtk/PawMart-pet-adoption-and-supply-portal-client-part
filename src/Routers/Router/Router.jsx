import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import Home from "../../Pages/Home/Home";
import useAxios from "../../Hooks/useAxios";
import FilteredCategory from "../../Components/FilteredCategory/FilteredCategory";




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
        }
    ]

}])
export default router;