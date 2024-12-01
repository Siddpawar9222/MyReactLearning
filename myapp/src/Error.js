import {useNavigate} from "react-router-dom" ;
//useNavigate used to navigate the page
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>404 Error Found</div>
     <button onClick={()=>{navigate(-1)}} >Go back</button>  //It will navigate to previous page
    </>
  )
}

export default Error ;