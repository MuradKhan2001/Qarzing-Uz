import SearchBox from "./components/SearchBox";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import AddDeceased from "./components/AddDeceased";
import SearchDeceased from "./components/SearchDeceased";
import ManualSite from "./components/ManualSite";
import News from "./components/News";
import AboutDeceased from "./components/about-deceased";
import Information from "./components/Information";

import LogInAdmin from "./components/Log-in-admin";



export const MainRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about-us",
        element: <AboutUs/>
    },
    {
        path: "/search",
        element: <SearchBox/>
    },
    {
        path: "/add-deceased",
        element: <AddDeceased/>
    },
    {
        path: "/search-deceased",
        element: <SearchDeceased/>
    },
    {
        path: "/manual-site",
        element: <ManualSite/>
    },
    {
        path: "/news",
        element: <News/>
    },
    {
        path: "/about-deceased",
        element: <AboutDeceased/>
    },
    {
        path: "/information",
        element: <Information/>
    },
    {
        path: "/login-admin",
        element: <LogInAdmin/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
];




