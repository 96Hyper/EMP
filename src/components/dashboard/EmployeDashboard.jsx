import React from 'react'
import Header from '../other/Header'
import TaskListNumber from './TaskListNumber'
import TaskList from '../../TaskList/TaskList'

const EmployeDashboard = () => {
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
        <Header/>
        <TaskListNumber/>
        < TaskList/>
    </div>
  )
}

export default EmployeDashboard