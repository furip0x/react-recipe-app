import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="grid place-items-center min-h-full py-12">
      <div className="lg:flex">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-blue-600 text-8xl sm:text-9xl">404</h1>
          <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl dark:text-slate-200">
            <span className="text-red-500">Oops!</span> Page not found
          </p>
          <p className="mb-8 text-center text-slate-500 md:text-lg dark:text-slate-200">
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="px-6 py-2 text-lg font-semibold text-red-800 bg-red-100 rounded hover:bg-red-500 hover:text-white dark:bg-red-800 dark:text-slate-200 dark:hover:bg-red-700"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
