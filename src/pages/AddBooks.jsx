import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
    const [Data, setData] = useState({bookname:"", description:"", author:"", image:"", price:""})
    const change = (e) => {
        const {name, value} = e.target ;
        setData({...Data, [name]: value});
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/add", Data).then((res)=> alert(res.data.message));
        setData({bookname:"", description:"", author:"", image:"", price:""})
    }
    console.log(Data)
  return (
      <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "95vh" }}>
         <div className="container ">
        <form>
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
              onChange={change}
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
              onChange={change}
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
              onChange={change}
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
              onChange={change}
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
              onChange={change}
            />
          </div>
          <button onClick={submit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
