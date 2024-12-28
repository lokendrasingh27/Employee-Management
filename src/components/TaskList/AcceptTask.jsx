import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-cneter '>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text -sm '>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>{data.title}</h2>
            <p className='text-sm mt-2 '>
              {data.description}
            </p>
            <div className='flex justify-between mt-4 '>
                <button className=' rounded bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
                <button className='rounded bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
            </div>
         </div>
         
  )
}

export default AcceptTask