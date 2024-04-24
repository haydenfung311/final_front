// import React from 'react'
// import ReactDOM from 'react-dom/client'
import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../ui/page/ProductListingPage";
import ProductDetail from "../ui/page/ProductDetail";
import ShoppingCart from "../ui/page/ShoppingCart";
import LoginPage from "../ui/page/LoginPage";
import ThankYou from "../ui/page/ThankYou";
import ErrorPage from "../ui/page/ErrorPage";
import Checkout from "../ui/page/Checkout";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/product/:productId",
        element: <ProductDetail/>
    },
    {
        path: "/shoppingcart",
        element: <ShoppingCart/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/checkout/:transactionId",
        element: <Checkout/>
    },
    {
        path: "/thankyou",
        element: <ThankYou/>
    },
    {
        path: "/error",
        element: <ErrorPage/>
    }
])