import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import Home from "./Home";
import Header from "./Header";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import NoPage from "./NoPage";
import MyRoutes from "./MyRoutes";


const MainRouter = () => {
  return (
    <BrowserRouter>
       <Header/>
        <MyRoutes/>
    </BrowserRouter>
  )
}

export default MainRouter  ;

/*

-Routes are used to manage the navigation and rendering of different components based on the current URL or route path.
-It allows you to create a single-page application (SPA) with multiple views or pages without the need to reload the page for each view change.

-BrowserRouter :
 Enable Routing in browser
 This component keeps the URL in sync with your UI
 
-Routes :
 Wrap up multiple Route
 
-Route 
 Route component takes a path prop and a component(element) prop.
 can be nested
 
-Link 
used to set the URL and keep track of browsing history.

-Outlet
 renders the current route selected.

*/ 