import React, { useState } from 'react'
import {data} from '../Data/data'

function Food() {
    const [foods,setFoods] = useState(data)
    // filter type category 
    const FilterCtegory = (category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category
            })
        )
    }
    // filter by price
    const FilterPrice = (price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price === price
            })
        )
    }

  return (
    <div className=' max-w-[1640px] m-auto px-4 py-12'>
      <h1 className=' text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* filter row */}
      <div className=' flex flex-col lg:flex-row justify-between'>
        {/* filter type  */}
        <div>
            <p className=' font-bold text-gray-700'>Filter Type </p>
            <div className=' flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={()=>FilterCtegory('burger')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                <button onClick={()=>FilterCtegory('pizza')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={()=>FilterCtegory('salad')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button> 
                <button onClick={()=>FilterCtegory('chicken')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
            </div>
        </div>
        {/* filter price  */}
        <div>
            <p className=' font-bold text-gray-700'>Filter Price</p>
            <div className=' flex justify-between max-w-[390px] w-full'>
                <button  onClick={()=>FilterPrice('$20')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$20</button>
                <button  onClick={()=>FilterPrice('$30')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$30</button>
                <button  onClick={()=>FilterPrice('$40')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$40</button>
                <button  onClick={()=>FilterPrice('$50')}  className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$50</button>
            </div>
        </div>
      </div>
      {/* display foods  */}
      <div className=' grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item, index) => (
            <>
             <div key={index} className=' border shadow-lg rounded-lg hover:scale-105 duration-300'> 
                 <img src={item.image} alt={item.name} className=' w-full h-[200px] object-cover rounded-t-lg' />
             <div className=' flex justify-between px-2 py-4'>
                <p className=' font-bold'>{item.name}</p>
                <p><span className=' bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
             </div>
          </div>
             </>

         ))}
        </div>
    </div>
  )
}

export default Food
