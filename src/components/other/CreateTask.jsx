import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {


  const {userData,setUserData}=useContext(AuthContext)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [description, setDescription] = useState("")
    const [category , setCategory ] = useState("")

   const [newTask , setNewTask ] = useState({})
  const submitHandler=(e)=>{
   e.preventDefault()
    setNewTask({title,description,date,category,active:false,newTask:true,complete:false,failed:false})

    const data=userData

    data.forEach((elem)=>{
        if(assignTo == elem.firstName){
          elem.tasks.push(newTask)
          elem.taskNumbers.newTask=elem.taskNumbers.newTask+1 

        }
    })
      setUserData(data)
     

   setTitle("")
   setDate("")
   setAssignTo("")
   setDescription("")
   setCategory("")
  }
  return (
    <div className= ' p-5 bg-[#1C1C1C]  mt-5 rounded '>
    <form onSubmit={submitHandler} className='flex  rounded-xl p-6 w-full bg-[#1C1C1C] gap-10 items-start justify-center'>
  
  <div className='w-full lg:w-1/2'>
    <div className='mb-4'>
      <h3  className='text-white text-sm font-medium'>Task Title</h3>
      <input value={title} onChange={(e)=>{
        setTitle(e.target.value);
      }}
        className='text-white mb-2 text-sm py-1 px-2 w-full sm:w-4/5 border-2 border-white bg-transparent outline-none rounded'
        type="text"
        placeholder='Make a UI design'
        name=""
        id=""
      />
    </div>
    <div className='mb-4'>
      <h3 className='text-white text-sm font-medium'>Date</h3>
      <input value={date} onChange={(e)=>{
        setDate(e.target.value);
      }}
        className='text-white mb-2 text-sm py-1 px-2 w-full sm:w-4/5 border-2 border-white bg-transparent outline-none rounded'
        type="date"
        name=""
        id=""
      />
    </div>
    <div className='mb-4'>
      <h3 className='text-white text-sm font-medium'>Assign To</h3>
      <input value={assignTo} onChange={(e)=>{
        setAssignTo(e.target.value)
      }}
        className='text-white mb-2 text-sm py-1 px-2 w-full sm:w-4/5 border-2 border-white bg-transparent outline-none rounded'
        type="text"
        placeholder='Employee name'
        name=""
        id=""
      />
    </div>
    <div className='mb-4'>
      <h3 className='text-white text-sm font-medium'>Category</h3>
      <input value={category} onChange={(e)=>{
        setCategory(e.target.value)
      }}
        className='text-white mb-2 text-sm py-1 px-2 w-full sm:w-4/5 border-2 border-white bg-transparent outline-none rounded'
        type="text"
        placeholder='Design, dev, etc.'
        name=""
        id=""
      />
    </div>
  </div>

  {/* Right Section */}
  <div className='w-full lg:w-1/2 flex flex-col items-start'>
    <h3 className='text-white text-sm font-medium'>Description</h3>
    <textarea value={description} onChange={(e)=>{
      setDescription(e.target.value)
    }}
      className='w-full bg-transparent border-2 border-white rounded h-32 sm:h-40 lg:h-52 mb-4'
      name=""
      cols="30"
      rows="10"
      id=""
    ></textarea>
    <button
      className='bg-emerald-500 py-3 font-semibold hover:bg-emerald-600 px-5 rounded text-sm w-full'
    >
      Create Task
    </button>
  </div>
</form>

  </div>
  )
}

export default CreateTask
