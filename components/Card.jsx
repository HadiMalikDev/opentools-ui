export default function Card({icon,title,desc}) {
  return (
    <div className="transition-all rounded-lg shadow hover:shadow-lg relative group bg-[#fff] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
      <div dangerouslySetInnerHTML={{__html:icon}} />
      <div className="mt-8">
        <h2 className="text-lg font-medium">
          <a href="#" className="focus:outline-none">
            {/* <!-- Extend touch target to entire panel --> */}
            <span className="absolute inset-0" aria-hidden="true"></span>
            {title}
          </a>
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          {desc}
        </p>
      </div>
      <span
        className="pointer-events-none absolute top-6 right-6 transition-all text-gray-300 group-hover:text-gray-400 group-hover:top-5 group-hover:right-5"
        aria-hidden="true"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
        </svg>
      </span>
    </div>
  );
}
