import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";

const App = ()=> (
    <div className="app">
        <Header/>
        <Body/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorComponent/>
    },
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/contactUs',
        element:<ContactUs/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)