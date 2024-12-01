import AppLink from "./chapters/AppLink";
import MyPractice from "./practice/MyPractice";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom" ;
import Home from "./chapters/react-routes/Router/Home" ;
import BookList from "./chapters/react-routes/Router/BookList" ;
import Book from "./chapters/react-routes/Router/Book" ;
import NewBook from "./chapters/react-routes/Router/NewBook";
import NoFound from "./chapters/react-routes/Router/NoFound";
import BookLayout from "./chapters/react-routes/Router/BookLayout";

const App = () => {
  return (
    <>
    <div>
     {/* <AppLink/> */}
      {/* <MyPractice/> */}
    </div>
     

     <BrowserRouter>
     <nav>
         <ul>
            <li>
              <Link to="/">Go to Home</Link>
            </li>
            <li>
              <Link to="/books">List of Books</Link>
            </li>
         </ul>
     </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/books" element={<BookLayout/>}>
        <Route index element={<BookList/>}/>
        <Route path=":id" element={<Book/>}/>
        <Route path="new" element={<NewBook/>}/>
        </Route>
        {/* <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:id" element={<Book/>}/>
        <Route path="/books/new" element={<NewBook/>}/> */}
        <Route path="*" element={<NoFound/>}/>
      </Routes>

     </BrowserRouter>
   

    </>
  )
}

export default App ;