
import { Root } from "../layout/Root";

import { HomePage } from "../Pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            
        ]
    },
    
]);