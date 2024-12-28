import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div id='container' className='text-white flex flex-wrap mt-10 justify-between gap-5'>
     
      <div className='rounded-xl py-6 px-9 w-full sm:w-[45%] lg:w-[22%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      
      <div className='rounded-xl py-6 px-9 w-full sm:w-[45%] lg:w-[22%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
      </div>
      
      <div className='rounded-xl py-6 px-9 w-full sm:w-[45%] lg:w-[22%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.complete}</h2>
        <h3 className='text-xl font-medium'>complete</h3>
      </div>
     
      <div className='rounded-xl py-6 px-9 w-full sm:w-[45%] lg:w-[22%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
