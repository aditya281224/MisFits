import { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list,setList]=useState([])
  const fetchList = async()=>{
    try{
      const response = await axios.get(backendUrl+'/api/product/list')
      if(response.data.success){
        setList(response.data.products);
      }
      else{
        toast.error(response.data.message);
      }

    }
    catch(error){
      console.log(error)
      toast.error(error.message)

    }
  }

  const removeProduct = async(id)=>{
    try{
      const response = await axios.post(backendUrl+'/api/product/remove',{id},{headers:{token}})

      if(response.data.success){
        toast.success(response.data.message);
        await fetchList();
      }
      else{
        toast.error(response.data.message)
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div>
        {/* List Table Title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-50 text-sm'>
          <b >IMAGE</b>
          <b>NAME</b>
          <b>CATEGORY</b>
          <b>PRICE</b>
          <b className='teext-center'>ACTION</b>
          
        </div>
        {/* Product List */
        }
        {
          list.map((item,index)=>(
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm
            '>
              <img className='w-12' src={item.image[0]} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
