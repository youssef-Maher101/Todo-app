export default function Header() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8">
        {/* Icon */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-slate-800 rounded-2xl flex justify-center items-center shrink-0">
          <i className="fa-solid fa-list-check text-3xl sm:text-5xl text-blue-600"></i>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            To-Do List
          </h2>

          <p className="text-base sm:text-xl text-blue-200 font-bold">
            Small steps. Big progress.
          </p>
        </div>
      </div>

      {/* Line */}
      <span className="block w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></span>

    </>
  );
}
