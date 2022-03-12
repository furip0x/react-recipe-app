import { Link } from "react-router-dom"
import MealListItem from "../MealListItem"
import Loader from "../Loader"
import { useMealsQuery } from "../../features/meals/mealsApiSlice"

const Favourites = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useMealsQuery("")
  const isFavourite = data?.some((meal) => meal.isFavourite === true)

  if (!isFavourite) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-y-2 text-2xl font-bold text-gray-800 text-center md:text-3xl">
            <span className="text-red-500">Oops!</span>
            <p className="mb-6">Your favourite list is empty!</p>
            <Link
              to="/"
              className="px-6 py-2 text-base font-semibold text-red-800 bg-red-100 rounded hover:bg-red-500 hover:text-white md:text-lg"
            >
              Search for meals
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-3xl font-bold mb-7 sm:text-4xl">Favourites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {error ? (
            <h1 className="text-red-600 text-xl font-bold text-center col-span-full">
              Oh no, there was an error.
            </h1>
          ) : isLoading && isFetching ? (
            <div className="grid col-span-full justify-center">
              <Loader />
            </div>
          ) : isSuccess ? (
            data?.map((meal) => {
              if (meal.isFavourite) {
                return (
                  <MealListItem
                    key={meal.id}
                    id={meal.id}
                    isFavourite={meal.isFavourite}
                    image={meal.image}
                    name={meal.name}
                    instructions={meal.instructions}
                    country={meal.area}
                    category={meal.category}
                  />
                )
              }
              return false
            })
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Favourites
