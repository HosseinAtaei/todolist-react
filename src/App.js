import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="h-screen bg-indigo-800 flex justify-center ">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-1/2 h-max mt-5">
        <h1 className="text-2xl font-bold mb-4 text-center p-4">لیست کارها</h1>
        <div className="flex mb-4">
          <button
            onClick={addTask}
            className="bg-sky-500 shadow-2xl hover:bg-sky-600 text-white px-4 py-2 rounded"
          >
            افزودن
          </button>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 border-b border-gray-300 focus:outline-none focus:border-none rounded ml-2 text-center shadow-xl"
            placeholder="امروز چه کارهایی داری؟ " 
          />
        </div>
        <div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 py-6 border-b border-gray-200"
            >
              <button
                onClick={() => removeTask(index)}
                className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                حذف کردن
              </button>
              <div>{task}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
