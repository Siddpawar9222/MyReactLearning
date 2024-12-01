import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import "./Input_Button.css";
import RecordStore from "./RecordStore";
import { useState } from "react";

function Input_Button() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const [form , setform] =useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    if (name && email) {
      setData([
        ...data,
        {
          name: name,
          email: email,
        },
      ]);
      setName("");
      setEmail("");
    }

    //code readiblity approach

    //  if(form.name && form.email)
    //  {
    //   setData([...data , form]);
    //   //  setform(form);
    //    setform({});
    //  }
  };

  return (
    <div className="universal">
      <Stack className="container_Input" spacing={2} direction="row">
        <TextField
          className="textfield"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => {setName(event.target.value)}}
          //code readiblity approach
          // value={form.name || ""}
          // onChange={(event)=>setform({...form , name:event.target.value})}
          inputProps={{ style: { fontSize: "2rem" } }}
          InputLabelProps={{
            style: {
              fontSize: "1.8rem",
              background: "white",
              paddingRight: "0.6rem",
              paddingLeft: "0.2rem",
            },
          }}
        />
        <TextField
          className="textfield"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          // value={form.email || ""}
          // onChange={(event)=>setform({...form , email:event.target.value})}
          inputProps={{ style: { fontSize: "2rem" } }}
          InputLabelProps={{
            style: {
              fontSize: "1.8rem",
              background: "white",
              paddingRight: "0.6rem",
              paddingLeft: "0.2rem",
            },
          }}
        />
        <Button
          variant="contained"
          className="button"
          color="success"
          onClick={addData}
          style={{ fontSize: "1.5rem", height: "5.7rem" }}
        >
          <AddIcon
            style={{
              fontSize: "3rem",
            }}
          />
        </Button>
      </Stack>
      <RecordStore passdata={data} setDataPass={setData} />
    </div>
  );
}

export default Input_Button;
