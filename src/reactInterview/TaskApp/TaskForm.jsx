import React, { useEffect } from "react";

const TaskForm = ({ task, tasks, setTask, setTasks }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;

    setTask((prev) => ({
      ...prev,
      [name]: value.trim(),
      id: Date.now().toString(),
      isComplete: "0",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in task) {
      if (!task[key]) {
        console.log(key);
        alert("fill all the fields");
        return;
      }
    }
    setTasks((prev) => [...prev, task]);

    setTask({
      id: "",
      name: "",
      description: "",
      priority: "",
      isComplete: "0",
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      <form onSubmit={handleSubmit}   className="flex  flex-col p-3 w-[500px]">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={task.name}
          onChange={handleChange}
          className="border-2"
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          value={task.description}
          className="border-2"
        />

        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          value={task.priority}
          onChange={handleChange}
          className="border-2"
        >
          <option value="">Select</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" className="border-2 my-2">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
