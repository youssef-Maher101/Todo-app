export default function TaskList({ tasks, handleDone, handleEdit, handleDelete }) {
  return (
    <>
      <ul className="flex flex-col gap-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-3 sm:p-4 rounded-xl text-base sm:text-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition"
          >
            <span
              className={` text-slate-100 ${task.status ? "line-through opacity-50" : ""}`}
            >
              {task.text}
            </span>

            <div className="flex gap-2 w-full sm:w-auto shrink-0">
              <button
                onClick={() => handleDone(task.id)}
                className="flex-1 sm:flex-none bg-cyan-600/15 text-cyan-400 border border-cyan-600/40 hover:bg-cyan-600 hover:text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-sm transition cursor-pointer duration-500"
              >
                Done
              </button>

              <button
                onClick={() => {
                  handleEdit(task.id);
                }}
                className="flex-1 sm:flex-none bg-blue-600/15 text-blue-400 border border-blue-600/40 hover:bg-blue-600 hover:text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-sm transition cursor-pointer duration-500"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(task.id)}
                className="flex-1 sm:flex-none bg-rose-600/15 text-rose-400 border border-rose-600/40 hover:bg-rose-600 hover:text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-sm transition cursor-pointer duration-500"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
