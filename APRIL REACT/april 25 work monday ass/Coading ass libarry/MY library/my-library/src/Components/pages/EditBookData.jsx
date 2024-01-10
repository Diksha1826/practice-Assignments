// import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
display: flex ;
flex-direction: column ;
justify-content: center ;
align-items: center ;
`;
// add style for text area
export const Textarea = styled.textarea`
width: 300px ;
height: 200px ;

`;

export const EditBookData = () => {
   const [imgurl , setimgurl ] = useState("");
   const [desc , setdesc] = useState("")
   const navigate = useNavigate();
   const obj = {
    thumbnailUrl: imgurl ,
    longDescription: desc 
   }

  const {id} = useParams(); 
  const handleUpdate = async(e) => {
    e.preventDefault();
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
    let res = await fetch(`http://localhost:8080/books/${id}` , {
      method: "PATCH" ,
      headers: {
        "content-type": "application/json" 
      } ,
      body: JSON.stringify( obj )
    })
    .then((res)=>{
      if(res.status == '200'){
        navigate(`/books/${id}`)
      }
    })
  };


  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          value={imgurl}
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={(e)=>setimgurl(e.target.value)}
        />
        <Textarea
        value={desc}
          data-testid="update-form-description"
          placeholder="Update long Description"
          onChange={(e)=>setdesc(e.target.value)}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
