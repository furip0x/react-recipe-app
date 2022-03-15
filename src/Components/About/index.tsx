import React from "react"

const About = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col max-w-max mx-auto rounded-lg bg-transparent p-0 sm:p-8 sm:bg-stone-50 sm:dark:bg-slate-800">
          <h1 className="text-3xl font-bold mb-7 sm:text-4xl dark:text-slate-200">
            React Recipe App
          </h1>
          <h2 className="text-amber-500 text-xl font-bold mb-3 sm:text-2xl dark:text-slate-200">
            Built with
          </h2>
          <ul className="text-xl dark:text-slate-300">
            <li className="mb-1">- React</li>
            <li className="mb-1">- React Router</li>
            <li className="mb-1">- Redux Toolkit(with RTK Query)</li>
            <li className="mb-1">- React-hot-toast</li>
            <li className="mb-1">- Tailwindcss</li>
            <li className="mb-1">- TypeScript</li>
            <li className="mb-1">
              -
              <a
                href="https://mockapi.io/"
                title="mockapi"
                rel="noreferrer noopener"
                target="_blank"
                className="pl-1 underline"
              >
                mockapi.io
              </a>
            </li>
            <li className="mb-1">
              -
              <a
                href="https://www.themealdb.com/"
                title="the meal db"
                rel="noreferrer noopener"
                target="_blank"
                className="pl-1 underline"
              >
                TheMealDB
              </a>
            </li>
            <li className="pt-2">
              Images and other data has taken from TheMealDB.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
