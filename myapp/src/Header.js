import "./Header.css";
import { NavLink } from "react-router-dom";
//NavlinkUser to highlight current components
//Link component is without style
const Header = () => {
  const navLinkstyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "2.5rem", //Code for highlight
    };
  };
  return (
    <h1 className="header">
      <div className="headerName">Fatching Data</div>
      <div className="content">
        <NavLink style={navLinkstyle} className="Link" to={"/"}>
          {" "}
          <div className="divs">Home</div>
        </NavLink>
        <NavLink style={navLinkstyle} className="Link" to={"./ContactUs"}>
          {" "}
          <div className="divs">Contact Us</div>
        </NavLink>
        <NavLink style={navLinkstyle} className="Link" to={"./AboutUs"}>
          {" "}
          <div className="divs">AboutUs</div>
        </NavLink>
      </div>
    </h1>
  );
};

export default Header;
