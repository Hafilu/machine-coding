import React, { useState } from "react";
import TaskForm from "./TaskForm";

const TaskApp = () => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    priority: "",
    isComplete: "0",
  });
  const [searchValue, setSearchValue] = useState("");
  const [priority, setPriority] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleDelete = (task) => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };

  const handleEdit = (task) => {
    const index = tasks.indexOf(task);
    console.log(index);
    task.isComplete = task.isComplete === "0" ? "1" : "0";
    tasks.splice(index, 1, task);

    setTasks([...tasks]);
  };

  const filterdValue = priority
    ? tasks
        .filter(
          (item) =>
            item.name.includes(searchValue) ||
            item.description.includes(searchValue)
        )
        .filter((item) => item.priority === priority)
    : tasks.filter(
        (item) =>
          item.name.includes(searchValue) ||
          item.description.includes(searchValue)
      );
  console.log("filter", filterdValue);

  return (
    <div>
      <h1>Task app</h1>
      <TaskForm
        task={task}
        setTask={setTask}
        setTasks={setTasks}
        tasks={tasks}
      />
      {tasks.length > 0 && (
        <div className="text-center my-3">
          <span>Serach: </span>
          <input
            type="text"
            className="border-2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.trim())}
          />

          <span className="mx-3">Filter: </span>
          <select
            name="priority"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border-2 "
          >
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      )}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {filterdValue?.map((item) => (
          <div key={item.id}>
            <div
              className={`m-2 border-2 border-black p-2 ${
                item.isComplete === "1" ? "bg-gray-400" : ""
              }`}
            >
              <h2>Task Name: {item.name}</h2>
              <p>Task Description: {item.description}</p>
              <span>Task Priority: {item.priority}</span>
            </div>
            <div className="m-2">
              <button
                className="border-2 mr-2 p-2"
                onClick={() => handleEdit(item)}
              >
                {" "}
                {item.isComplete === "0" ? "Done" : "UnDone"}
              </button>
              <button
                className="border-2 p-2 bg-red-700"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
