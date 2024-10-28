'use client'

import axios from "axios";

const Update = ({id}:{id:string}) => {
    const handleUpdate =async(id:string)=>{
        console.log("update click");
        const info ={madeIn:"India",
            price: "10000"
        }
        try {
            const res =await axios.put(`http://localhost:3000/api/singleProduct?id=${id}`,{info})
            console.log(res);
           
            

            
        } catch (error) {
            console.log(error);
            
        }
      
    }
    return (
        <div>
            <button onClick={()=>handleUpdate(id)} className='btn bg-red-400 '>Update</button>
        </div>
    );
};

export default Update;