import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] =useState(TASKS);
  const [category, setCategory] = useState("All");
  
  function handleRemoveTask(removedTask) {
    setTasks(tasks.filter((task) => task.text !== removedTask));
  
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = tasks.filter((task) => {
    if (category === "All") {
      return true;
    } else {
      return task.category === category;
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={category}
      onCategoryClick={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter((category) => category !== "All")}
      onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
      onRemoveTask={handleRemoveTask}
      tasks={filteredTasks}
      />
    </div>
  );
}

export default App;
