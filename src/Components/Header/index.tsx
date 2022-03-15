import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleTheme } from "../../features/themeSlice"

const Header = () => {
  const { isDark } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const bodyClass = isDark ? "dark" : "light"
    document.body.className = ""
    document.body.classList.add(bodyClass)
  }, [isDark])

  return (
    <header className="bg-yellow-300 border-b border-transparent py-4 dark:bg-slate-900 dark:border-b-slate-300/10">
      <div className="container flex flex-wrap items-center justify-center">
        <nav>
          <ul className="flex items-center sm:gap-x-3">
            <li>
              <Link
                to="/"
                title="home"
                className="font-medium tracking-wide text-slate-700 transition-colors duration-200 py-2 px-3 rounded hover:bg-yellow-400 hover:text-white focus:bg-yellow-500 focus:text-white dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700/50 dark:focus:bg-slate-700 dark:focus:text-slate-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favourites"
                title="favourites"
                className="font-medium tracking-wide text-slate-700 transition-colors duration-200 py-2 px-3 rounded hover:bg-yellow-400 hover:text-white focus:bg-yellow-500 focus:text-white dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700/50 dark:focus:bg-slate-700 dark:focus:text-slate-200"
              >
                <span className="w-6 h-6 inline-flex items-center justify-center border-2 border-amber-500 p-[0.35rem] mr-1.5 text-amber-500 bg-white rounded-full dark:bg-slate-100">
                  <svg
                    className="w-full"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
                  </svg>
                </span>
                Favourites
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                title="about"
                className="font-medium tracking-wide text-slate-700 transition-colors duration-200 py-2 px-3 rounded hover:bg-yellow-400 hover:text-white focus:bg-yellow-500 focus:text-white dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700/50 dark:focus:bg-slate-700 dark:focus:text-slate-200"
              >
                About
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="font-medium tracking-wide h-8 w-8 transition-colors duration-200 rounded p-1"
                onClick={() => dispatch(toggleTheme())}
              >
                {isDark ? (
                  <svg viewBox="0 0 24 24" fill="none" className="w-full">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                      className="fill-sky-400/20"
                    ></path>
                    <path
                      d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                      className="fill-sky-500"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                      className="fill-sky-500"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full"
                  >
                    <path
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      className="fill-transparent stroke-orange-600"
                    ></path>
                    <path
                      d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                      className="stroke-orange-600"
                    ></path>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
