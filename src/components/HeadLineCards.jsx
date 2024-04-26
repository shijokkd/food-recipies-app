import React from 'react'

function HeadLineCards() {
  return (
    <>
    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className=' rounded-xl relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className=' px-2'>Through 8/26</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
        </div>
        <div className=' rounded-xl relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className=' px-2'>Through 8/26</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
        </div>
        <div className=' rounded-xl relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className=' px-2'>Through 8/26</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg" alt="img" />
        </div>
        
    </div>
    </>
  
  )
}

export default HeadLineCards
