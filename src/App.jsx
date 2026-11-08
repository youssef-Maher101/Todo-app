import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  //========================== States ==========================

  const [inputValue, setInputValue] = useState("");
  const [nextId, setNextId] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");

  //========================== handleTask ==========================

  function handleTask() {
    if (inputValue.trim() === "") return;

    setTasks([...tasks, { id: nextId, text: inputValue, status: false }]);
    setNextId(nextId + 1);
    setInputValue("");
  }

  //========================== handleInput ==========================

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  //========================== Done Task ==========================

  function handleDone(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task,
      ),
    );
  }

  //========================== handleDelete ==========================

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //========================== handleEdit ==========================

  function handleEdit(id) {
    const selectedTask = tasks.find((task) => task.id === id);

    setEditingId(selectedTask.id);
    setInputValue(selectedTask.text);
  }

  //========================== handleUpdate ==========================

  function handleUpdate() {
    if (inputValue.trim() === "") return;

    setTasks(
      tasks.map((task) =>
        task.id === editingId ? { ...task, text: inputValue } : task,
      ),
    );

    setEditingId(null);
    setInputValue("");
  }

  //========================== handleSubmit ==========================

  function handleSubmit() {
    if (editingId === null) {
      handleTask();
    } else {
      handleUpdate();
    }
  }

  //========================== filterTasks ==========================

  function filterTasks() {
    if (filter === "all") {
      return tasks;
    } else if (filter === "Active") {
      return tasks.filter((task) => task.status === false);
    } else {
      return tasks.filter((task) => task.status === true);
    }
  }

  //========================== UI ==========================

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-start sm:items-center justify-center p-3 sm:p-6">
      <div className="bg-slate-950 border border-slate-800 p-5 sm:p-10 rounded-3xl shadow-2xl w-full max-w-3xl">
        <Header />
        <Form
          inputValue={inputValue}
          handleInput={handleInput}
          editingId={editingId}
          handleSubmit={handleSubmit}
          setFilter={setFilter}
        />
        <TaskList
          tasks={filterTasks()}
          handleDone={handleDone}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
