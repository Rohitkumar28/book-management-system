import React from 'react';
import { Link } from "react-router-dom";


const BooksSection = ({ data }) => {
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
      {data && data.map((item, index) => (
        <div key={index} className='' style={{ width: "200px", height: "345px", backgroundColor: "white", margin: "10px", borderRadius: "20px" }}>
          <div className=''>
            <img className='img-fluid' style={{ width: "200px", height: "210px", borderTopRightRadius: "20px" }} src={item.image} alt="/" />
          </div>
          <div>
            <h6 className='text-black px-2'>{item.bookname}</h6>
            <b className='px-2' style={{ fontSize: "30px" }}>Rs. {item.price}</b>
          </div>
          <div className="d-flex justify-content-around">
          <button className='btn btn-primary'><Link style={{color:"white", textDecoration:"none"}} to= {`/update/${item._id}`} >Update</Link></button>
          <button className='btn btn-primary'><Link style={{color:"white", textDecoration:"none"}} to={`/delete/${item._id}`}>Delete</Link></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksSection;

