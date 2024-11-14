import React from 'react'

const CreateTask = () => {
  return (
    <div className="mt-10 bg-gray-800 p-8 rounded-lg shadow-lg">
    <form className="flex flex-wrap lg:flex-nowrap gap-6 w-full items-start justify-between">
      {/* Left side fields */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div>
          <h3 className="font-semibold text-white mb-2">Task Title</h3>
          <input 
            type="text" 
            placeholder="Make UI Design" 
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-600 text-white" 
          />
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Date</h3>
          <input 
            type="date" 
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-600 text-white" 
          />
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Assign To</h3>
          <input 
            type="text" 
            placeholder="Employee name" 
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-600 text-white" 
          />
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Category</h3>
          <input 
            type="text" 
            placeholder="Design, Dev, etc." 
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-600 text-white" 
          />
        </div>
      </div>

      {/* Right side description */}
      <div className="w-full lg:w-1/2">
        <h3 className="font-semibold text-white mb-2">Description</h3>
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-600 text-white resize-none"
        ></textarea>

<button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-700 transition-transform transform active:scale-95">
      Create Task
    </button>
      </div>
    </form>


  </div>
  )
}

export default CreateTask