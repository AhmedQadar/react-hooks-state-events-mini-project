import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemoveTask }) {
    const renderTasks =tasks.map((task) => (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onRemoveTask={onRemoveTask}
      />
    ));

    return (
      <div className="tasks">
        {/* display a list of tasks using Task component */}
        {renderTasks}
      </div>
    );
  }

  


export default TaskList;
