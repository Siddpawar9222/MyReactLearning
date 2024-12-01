import { Link, Outlet } from 'react-router-dom';

const Course = () => {
  const linkStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    width: '150px',
  };

  return (
    <>
      <Link to="/course/java" style={linkStyle}>Java</Link>
      <Link to="/course/javascript" style={linkStyle}>JavaScript</Link>
      <Link to="/course/python" style={linkStyle}>Python</Link>
      <hr />
      <Outlet/>
    </>
  );
};

export default Course;
