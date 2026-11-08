export default function Header() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-5 mb-5 sm:mb-8">

        {/* Icon */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-slate-800 rounded-xl sm:rounded-2xl flex justify-center items-center shrink-0">
          <i className="fa-solid fa-list-check text-2xl sm:text-3xl lg:text-5xl text-blue-600"></i>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2 min-w-0">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            To-Do List
          </h2>

          <p className="text-xs sm:text-base lg:text-xl text-blue-200 font-bold">
            Small steps. Big progress.
          </p>
        </div>
      </div>

      {/* Line */}
      <span className="block w-full h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></span>
    </>
  );
}
;
