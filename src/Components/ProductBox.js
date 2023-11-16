import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
const ProductBox = ({ id,title,price,description,category,image }) => {
  const MAX_RATING=5
  const MIN_RATING=1
  const [rating, setrating] = useState(Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING)
  const [hasPrime, sethasPrime] = useState(Math.random()<0.5)
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image className='mx-auto' src={image} height={200} width={200} objectFit='contain'/>
      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {Array(rating).fill().map((value,index)=>(
          <StarIcon className='h-5 text-yellow-500'/>
        ))}
        </div>
        <p className='text-xs my-2 truncate-3-lines'>{description}</p>
        <div className='mb-5'>
          {price}
        </div>
        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src='https://assets.stickpng.com/images/5f7f75fa3dd424000436e50e.png' alt=''/>
            <p className='text-xs text-gray-500'>Free Next-Day Delivery</p>
          </div>
        )}
        <button className='mt-auto button'>Add to Basket</button>
      

    </div>
  )
}

export default ProductBox