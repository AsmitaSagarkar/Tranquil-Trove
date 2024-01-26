import ReactDom from "react-dom"
import "./index.css";
import AppLayout from "./component/applayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/component/home";

const appRouter = createBrowserRouter(
    [

        {
            element: <AppLayout />,
            children : [
                {
                    path :"/",
                    element :<Home />
                },
                
            ]
        }
    ]
)
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);