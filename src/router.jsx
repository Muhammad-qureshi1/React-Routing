import { createBrowserRouter } from "react-router";
import Navbar from "./Component/Navbar";
import Home from "./Pages/home";
import About from "./Pages/about";
import Product from "./Pages/product";
// import { Children } from "react";

const router = createBrowserRouter( [
    {
    path: '/',
    element: <Navbar />,
    errorElement: <>404 not found</>,
    children: [
        {index: true, element: <Home />},
        {path: "about", element: <About />},
        {path: "product", element: <Product />},
    ],
},
]);

export default router;