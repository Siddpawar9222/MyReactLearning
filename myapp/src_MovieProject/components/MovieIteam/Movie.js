import "./Movie.css" ; 
import Cards from "../UI/Cards";
import Header from "../UI/Header";
import MovieInfo from "./movie.json" ;
const Movie = () => {
  return (
        <div>
            <Header/>
             <div className="main">
              {
                MovieInfo.map((Element , index)=>{
                  return(
                  <Cards 
                  key = {index}
                  Poster={Element.Poster} 
                  Title={Element.Title}
                  Year={Element.Year}
                   />)
                })

              }
             </div>
            
        </div>
  )
}

export default Movie