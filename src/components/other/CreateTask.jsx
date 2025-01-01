/* eslint-disable no-unused-vars */
import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full  items-start justify-between'>
                <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='Make a UI design'></input>
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Date</h3>
                <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Assign To</h3>
                <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='employee name' />
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Category</h3>
                <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design, dev, etc' />
                </div>
                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className='text-sm py-2 px-4 h-44 w-full rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask