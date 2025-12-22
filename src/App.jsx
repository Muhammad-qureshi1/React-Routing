import { RouterProvider } from "react-router"
import Home from "./Pages/home";
import About from "./Pages/about";
import Product from "./Pages/product";
import router from "./router";
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
