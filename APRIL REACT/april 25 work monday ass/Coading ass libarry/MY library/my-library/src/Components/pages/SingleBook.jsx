// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// style for Flex
const Flex = styled.div`
display: flex ;
justify-content: center ;
align-items: center ;

`;

// add style for button
export const Button = styled.button`
width: 200px ;
height: 40px ;
background-color: black ;
color: white ;
margin: 100px;
`;


export const SingleBook = () => {
  const [ data , setData] = useState({});

  const {id} = useParams();

  // console.log(params);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id
     fetch(`http://localhost:8080/books/${id}`)
     .then((res)=> res.json())
     .then((data)=> setData(data))
     .catch((err)=> console.log(err))
  }, []);

  console.log(data)
  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!data && (
        <>
          <Flex>
            <img
              data-testid="book-image-url"
              src={data.thumbnailUrl}
              alt={data.title}
            />
            <div>
              <h2 data-testid="book-title">{data.title}</h2>
              <h3 data-testid="book-isbn">{data.isbn}</h3>
              <p data-testid="book-longdesc">{data.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
