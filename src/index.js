import ReactDom from "react-dom/client"
import "./index.css";
import AppLayout from "./component/applayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/component/home";
import Search from "../src/component/search"
import Product from "../src/component/products"
import Cart from "../src/component/cart"
import Login from "../src/component/login"
import SingleProduct from "./component/singleproduct"
import Contact from "./component/contact";
import About from "./component/about";
import Error from "./component/error";
import { AppProvider } from "./component/context/productcontext";

const appRouter = createBrowserRouter(
    
    [

        {
            element: <AppLayout />,
            children : [
                {
                    path :"/",
                    element :<Home />
                },
                {
                    path :"/search",
                    element :<Search />
                },
                {
                    path :"/cart",
                    element :<Cart />
                },
                {
                    path :"/product",
                    element :<Product />
                },
                {
                    path :"/login",
                    element :<Login />
                },
                {
                    path :"/home",
                    element :<Home />
                },
                {
                    path :"/about",
                    element :<About />
                },
                {
                    path :"/contact",
                    element :<Contact />
                },
                {
                    path :"/product",
                    element :<Product />
                },
               
                {
                    path :"/singleproduct/:id",
                    element :<SingleProduct />
                },
               
                
            ],
            errorElement :<Error />
        }
    ]
)
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <AppProvider>
    <RouterProvider router = {appRouter} />
    </AppProvider>
    );