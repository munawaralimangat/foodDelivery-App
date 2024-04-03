import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
//components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";

const App = ()=> (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contactUs',
                element:<ContactUs/>
            }
        ],
        errorElement:<ErrorComponent/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)