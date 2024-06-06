import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BooksSection from '../component/BooksSection';

    const Books = () => {
        const [Data, setData] = useState([]);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost:1000/api/v1/getBooks");
                    setData(response.data.books);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }, []); 


  return (
    <div className='bg-dark' style={{minHeight: "95vh"}}>
        <div className="d-flex justify-content-center align-items-center py-3">
            <h3 className='text-white'>Books Section</h3>
        </div>
        {Data && Data.length > 0 ? (
                <BooksSection data={Data}  />
            ) : (
                <div className='text-white'>Loading...</div>
            )}
        </div>
  )
}

export default Books

