import { createBrowserRouter } from "react-router-dom";
import Main from ".././../layouts//Main";
import Home from "../../../src///Pages///Home/////Home////////Home";
import Login from "../../.././src////Pages////Login//////Login";
import SignUp from "../../../././src//////Pages////////SignpUp//////////////////////////////SignUp";
import Cart from "../../Pages/Cart/Cart";
import ProductDetails from "../../../src////Pages///Home///Products///ProductDetails";
import Products from "../../../src////Pages///Home///Products///Products";
import Dashboard from "../../../src////Pages////Dashboard////Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: `/product/:id`,
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
