

import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    try {
      axios.delete("http://localhost:1000/api/v1/deleteBook/" + id)
        .then(res => {
          if (res.data.deleted) {
            navigate("/books");
          }
        })
        .catch(error => {
          console.error("Error deleting book:", error);
          
        });
    } catch (error) {
      console.error("Error deleting book:", error);
      
    }
  }, [id, navigate]);

  return null; 
};

export default DeleteBook;
