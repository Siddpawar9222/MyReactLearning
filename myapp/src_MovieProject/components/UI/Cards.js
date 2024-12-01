import "./Cards.css" ;

const Cards = (props) => {
  return (
<div className="card">
    <div className="card-image"><img src={props.Poster} alt="" /></div>
    <div className="card-text">
         <h2 className="date">{props.Title}</h2>
         <div className="date">{props.Year}</div>
    </div>
</div>
  )
}

export default Cards ;