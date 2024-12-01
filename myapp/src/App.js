import Header from "./Header";
import Home from "./Home"; 
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Error from "./Error";
import Insta from "./components/Insta";
import Email from "./components/Email";
import UserDetails from "./components/UserDetails";

import{
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom" ;

const App = () => {
  return (
    <Router>
    <div>
       <Header/>
       <Routes>
        {/* {Home} */}
        <Route>
         <Route path="/" element={<Home/>}/>
         </Route>
         <Route path="/:userId" element={<UserDetails/>}></Route>
          {/* {AboutUS} */}
         <Route path="/AboutUs" element={<AboutUs/>}/>
         {/* {ContactUS} */}
         <Route path="/ContactUs" element={<ContactUs/>}>
            <Route index element={<Insta/>} ></Route>           //Index routing(By default which component render)
            <Route path="insta" element={<Insta/>} ></Route>    
            <Route path="mail" element={<Email/>}></Route>       //Nested Routing(Routing in Routing)
            </Route>

         <Route path="*" element={<Error/>}/>
       </Routes>
    </div>
    </Router>
  )
}

export default App ;