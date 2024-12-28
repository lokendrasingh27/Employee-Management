import React from 'react'

const CompleteTask = ({data}) => {
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
    <div className=' mt-4 '>
        <button className='rounded  bg-green-500  hover:to-cyan-700 w-full py-1 px-2 text-sm'> Completed</button>
        
    </div>
 </div>
  )
}

export default CompleteTask