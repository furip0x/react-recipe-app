import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-yellow-300 py-4">
      <div className="container flex flex-wrap items-center justify-center">
        <nav>
          <ul className="flex items-center sm:gap-x-3">
            <li>
              <Link
                to="/"
                title="home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-2 px-3 rounded hover:bg-yellow-400 hover:text-white focus:bg-yellow-500 focus:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favourites"
                title="favourites"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-2 px-3 rounded hover:bg-yellow-400 hover:text-white focus:bg-yellow-500 focus:text-white"
              >
                <span className="w-6 h-6 inline-flex items-center justify-center border-2 border-amber-500 p-[0.35rem] mr-1.5 text-amber-500 bg-white rounded-full">
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
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 py-2 px-3 rounded hover:bg-yellow-400 hover:text-white focus:bg-yellow-500 focus:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
