import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import NoPage from "./NoPage";
import CourseDetail from "./CourseDetail";
import Course from "./Course";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/course" element={<Course />} >
             <Route path="/course/:name" element={<CourseDetail/>}/>
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default MyRoutes;
