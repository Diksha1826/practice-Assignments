import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid ;
  grid-template-columns: repeat(3 , 1fr);

`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    fetch(`http://localhost:8080/books`)
    .then((r) => r.json() )
    .then((data) => setData(data))
    .catch((err) => console.log(err))
  }, []);


  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          
          {data.map((item)=>{
            return <BookCard key={item.id} {...item} />
          })}
      </Grid>
    </>
  );
};
export default Books;
