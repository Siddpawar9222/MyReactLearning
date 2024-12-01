import "./RecordStore.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const RecordStore = (props) => {
  

  const removeElement =(index)=>{
    let arr = props.passdata ;
    arr.splice(index ,1);
    props.setDataPass([...arr])
  }

  return (
    <div className="container">
      <div className="container_DisplayData">
        <div className="items1">Name</div>
        <div className="items1">Email</div>
        <div className="items1">Remove</div>
      </div>
      {props.passdata.map((Element, index) => {
        return (
             <div key={`${index}-${Element.email}`} className="container_DisplayData">
            <div className="items">{Element.name}</div>
            <div className="items">{Element.email}</div>
            <div className="remove"> <Button variant="contained" color="error"
            style={{ marginRight: '1.4rem', height: "5.7rem"}}
             onClick={()=>removeElement(index)}
             >
            <DeleteIcon style={{ fontSize: "3rem" }} />
            </Button> </div>
          </div>
        );
      })}

    </div>
  );
};

export default RecordStore;
