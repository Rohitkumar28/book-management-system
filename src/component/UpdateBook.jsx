import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom'

    const UpdateBook = () => {
      const [Data, setData] = useState({bookname:"", description:"", author:"", image:"", price:""})
      const {id} = useParams()
      const navigate = useNavigate()

      useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get("http://localhost:1000/api/v1/getBooks/"+id)
                .then(res => { 
                  console.log(res)
                setData(res.data)
              });    
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        }, [id]); 

    const handleChange = (e) => {
        const {name, value} = e.target ;
        setData({...Data, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:1000/api/v1/updateBook/"+id, Data)
        .then((res)=> {
          if(res.data.updated){
              navigate("/books")
          }
          else {
            console.log(res)
          }
          setData({bookname:"", description:"", author:"", image:"", price:""})
        })
    }
    console.log(Data)

  return (
      <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "95vh" }}>
         <div className="container ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              BookName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="bookname"
              value={Data.bookname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={Data.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="author"
              value={Data.author}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="image"
              value={Data.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              name="price"
              value={Data.price}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;

