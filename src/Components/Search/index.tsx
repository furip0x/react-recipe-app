import React, { useState } from "react"
import { IMeal } from "../../types"
import MealListItem from "../MealListItem"
import {
  useMealsQuery,
  useGetMealsByNameMutation,
} from "../../features/meals/mealsApiSlice"
import logoIcon from "../../assets/images/logo-icon.svg"
import Loader from "../Loader"
import { useAppDispatch } from "../../app/hooks"
import { openModal } from "../../features/modalSlice"

const Search = () => {
  const dispatch = useAppDispatch()

  const [search, setSearch] = useState<string>("")
  const { data, error, isLoading, isFetching, isSuccess } =
    useMealsQuery(search)

  const [getMealsByName, getMealsByNameResult] = useGetMealsByNameMutation()

  // const handleSearchSubmit = async (
  //   e: React.MouseEvent<HTMLButtonElement>
  // ): Promise<void> => {
  //   e.preventDefault()
  // }

  const getRandomMeal = async (): Promise<void> => {
    await getMealsByName(search)

    const random = Math.floor(Math.random() * getMealsByNameResult.data!.length)
    const randomMeal = getMealsByNameResult.data![random]

    const result = {
      mealId: randomMeal.id,
      name: randomMeal.name,
      image: randomMeal.image,
    }

    dispatch(openModal(result))
  }

  return (
    <>
      <section className="pt-16 mx-auto">
        <div className="container">
          <h1 className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-3 text-4xl font-bold md:text-5xl md:leading-tight md:font-extrabold">
            <span className="text-amber-500">Welcome to</span>
            <span className="flex gap-x-1 text-lime-500">
              Free
              <img src={logoIcon} className="w-12" alt="" />
              Meals
            </span>
          </h1>
          <p className="mb-6 text-lg text-gray-500 text-center md:text-xl md:leading-normal">
            Free Meals is here to help you cook delicious meals with less stress
            and more joy.
          </p>
          <div className="mx-auto md:flex md:gap-x-2 md:max-w-2xl">
            <form className="flex flex-grow flex-col gap-y-3 gap-x-2 items-center w-full mb-3 md:flex-row md:mb-0">
              <input
                placeholder="Search for a meal..."
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-grow w-full h-12 px-4 transition duration-200 text-gray-500 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green-500 focus:outline-none focus:shadow-outline"
              />
              {/* <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-500 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                onSubmit={handleSearchSubmit}
              >
                Search
              </button> */}
            </form>
            <div className="hidden border-r border-gray-200 sm:block"></div>
            <button
              type="button"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-56 bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none"
              onClick={getRandomMeal}
            >
              I'm feeling lucky
            </button>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          {error ? (
            <h1 className="text-red-600 text-xl font-bold text-center col-span-full">
              Oh no, there was an error.
            </h1>
          ) : isLoading && isFetching ? (
            <div className="grid col-span-full justify-center">
              <Loader />
            </div>
          ) : isSuccess ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data === null ? (
                <h1
                  className="text-red-600 text-2xl
                 font-bold text-center col-span-full"
                >
                  No meals found!
                </h1>
              ) : (
                data?.map((meal: IMeal) => {
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
                })
              )}
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}

export default Search
