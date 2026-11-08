export default function Form({
  handleInput,
  inputValue,
  handleSubmit,
  editingId,
  setFilter,
}) {
  return (
    <div className="my-5 sm:my-7">
      {/* Input Container */}
      <div className="relative">
        {/* Input Icon */}
        <i className="fa-solid fa-plus absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-blue-500 text-base sm:text-lg pointer-events-none"></i>

        {/* Input */}
        <input
          type="text" 
          onChange={handleInput}
          value={inputValue}
          placeholder="Add a new task ..."
          className="w-full bg-slate-800 text-white placeholder-slate-400 p-3 sm:p-4 pl-10 sm:pl-12 pr-20 sm:pr-28 text-sm sm:text-lg rounded-xl border border-slate-700 outline-none focus:border-cyan-500 transition"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-bold transition cursor-pointer ${
            editingId === null
              ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-80"
              : "bg-rose-950/40 text-rose-400 border border-rose-800/60 hover:bg-rose-700 hover:text-white"
          }`}
        >
          {editingId === null ? "Add" : "Update"}
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
        <button
          onClick={() => setFilter("all")}
          className="flex-1 sm:flex-none px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-800 hover:text-white transition cursor-pointer hover:opacity-80"
        >
          All
        </button>

        <button
          onClick={() => setFilter("Active")}
          className="flex-1 sm:flex-none px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-800 hover:text-white transition cursor-pointer hover:opacity-80"
        >
          Active
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className="flex-1 sm:flex-none px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-800 hover:text-white transition cursor-pointer hover:opacity-80"
        >
          Completed
        </button>
      </div>
    </div>
  );
}
