import { createBrowserRouter } from "react-router-dom";
import Main from ".././../layouts//Main";
import Home from "../../../src///Pages///Home/////Home////////Home";
import Login from "../../.././src////Pages////Login//////Login";
import SignUp from "../../../././src//////Pages////////SignpUp//////////////////////////////SignUp";
import Cart from "../../Pages/Cart/Cart";
import Dashboard from "../../layouts/Dashboard";
import DashboardView from "../../Pages/Dashboard/Dashboard/DashboardView";
import Products from "../../Pages/Home/Products/Products";
import ProductDetails from "../../../src////Pages///Home///Products///ProductDetails";
import AllCustomer from "../../Pages/Dashboard/AllCustomer/AllCustomer";
import AddCustomer from "../../Pages/Dashboard/AddCustomer/AddCustomer";
import ProductList from "../../Pages/Dashboard/ProductList/ProductList";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import OrderList from "../../Pages/Dashboard/OrderList/OrderList";
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
        path: "/products",
        element: <Products />,
      },
      {
        path: `/product/:id`,
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardView />,
          },
          {
            path: "/dashboard/customer-list",
            element: <AllCustomer />,
          },
          {
            path: "/dashboard/add-customer",
            element: <AddCustomer />,
          },
          {
            path: "/dashboard/product-list",
            element: <ProductList />,
          }, 
          {
            path: "/dashboard/add-product",
            element: <AddProduct />,
          },
          {
            path: "/dashboard/order-list",
            element: <OrderList />,
          }
        ]
      }
    ]
  }
]);

export default router;
