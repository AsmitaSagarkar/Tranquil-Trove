import ReactDom from "react-dom"
import "./index.css";
import AppLayout from "./component/applayout";
import { createBrowserRouter } from "react-router-dom";


const appRouter = createBrowserRouter(
    [

        {
            element: <AppLayout />,
            children : [
                {
                    path :"/",
                    element :<home />
                },
                {
                    path:"/women",
                    element:<Women />
                },
                {
                    path:"/women",
                    element:<Men />
                },{
                    path:"/stores",
                    element:<Stores />
                },{
                    path:"/signin",
                    element:<Signin />
                },{
                    path:"/search",
                    element:<Search />
                },{
                    path:"/cart",
                    element:<cart />
                },
            ]
        }
    ]
)
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);