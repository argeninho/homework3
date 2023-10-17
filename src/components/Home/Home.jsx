import React, {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
	<div className='bg-gray-700 h-screen py-11 px-11'>
		<h1 className='text-slate-300 text-5xl font-bold py-5'>Tasks</h1>
		<input
        value={newTask}
        onChange={handleTaskInputChange}
        onKeyPress={handleKeyPress}
		type="text"
		placeholder='Add task'
		className='inputClick w-1/2 h-10 px-2 outline-none rounded-md'/>
		<ul className='list-inside text-size-xl text-xl text-slate-300 font-semibold'>
        {tasks.map((task, index) => (
          <li type='disc' className='my-2' key={index}>{task}</li>
        ))}
      </ul>
		</div>
  )
}

export default App;