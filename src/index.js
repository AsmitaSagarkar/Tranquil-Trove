import ReactDom from "react-dom/client"
import "./index.css";
import AppLayout from "./component/applayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/component/home";
import Search from "../src/component/search"
import Product from "../src/component/products"
import Category from "../src/component/category"
import Cart from "../src/component/cart"
import Login from "../src/component/login"
import Shop from "./component/shop";

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
                    path :":productId",
                    element :<Product />
                },
                {
                    path :"/login",
                    element :<Login />
                },
                {
                    path :"/mens",
                    element :<Category category = "mens" />
                },
                {
                    path :"/women",
                    element :<Category category = "women" />
                },
                {
                    path :"/kids",
                    element :<Category category = "kids" />
                },
                {
                    path :"/shop",
                    element :<Shop />
                },
                
                
            ]
        }
    ]
)
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);