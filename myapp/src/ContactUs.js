import {Link , Outlet} from "react-router-dom" ;
const ContactUs = () => {
  return (
    <>
   <Link to={"insta"}> <h4>Contact via Instagram</h4></Link>
   <Link to={"mail"}><h4>Contact via Mail</h4></Link> 
   <Outlet/>
    </>
  )
}

export default ContactUs ;