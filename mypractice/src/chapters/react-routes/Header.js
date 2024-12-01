import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    borderBottom: "2px solid red",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <nav style={headerStyle}>
      <div style={navStyle}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ display: "inline" }}>
            <NavLink
              to="/"
               style={(e)=>{
                  return{
                    ...linkStyle,
                    color : e.isActive ? "yellow" : "white"
                  }
               }}
            >
              Home
            </NavLink>
          </li>
          <li style={{ display: "inline", marginLeft: "20px" }}>
            <NavLink to="/blogs" style={(e)=>{
                  return{
                    ...linkStyle,
                    color : e.isActive ? "yellow" : "white"
                  }
               }}>
              Blogs
            </NavLink>
          </li>
          <li style={{ display: "inline", marginLeft: "20px" }}>
            <NavLink to="/contact" style={(e)=>{
                  return{
                    ...linkStyle,
                    color : e.isActive ? "yellow" : "white"
                  }
               }}>
              Contact
            </NavLink>
          </li>
          <li style={{ display: "inline", marginLeft: "20px" }}>
            <NavLink to="/course" style={(e)=>{
                  return{
                    ...linkStyle,
                    color : e.isActive ? "yellow" : "white"
                  }
               }}>
              Course
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
