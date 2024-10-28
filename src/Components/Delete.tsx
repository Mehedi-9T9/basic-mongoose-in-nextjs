'use client'

import axios from "axios";

const Delete = ({id}:{id:string}) => {
    const handleDelete =async (id:string)=>{
        try {
            const res = await axios.delete(`http://localhost:3000/api/singleProduct?id=${id}`)
            console.log(res);
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <button onClick={()=>handleDelete(id)} className='btn bg-red-500'>Delete</button>
        </div>
    );
};

export default Delete;