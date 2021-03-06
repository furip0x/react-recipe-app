import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-hot-toast"
import {
  useGetMealByIdQuery,
  useUpdateMealFavouriteMutation,
} from "../../features/meals/mealsApiSlice"
import { Ingredient } from "../../types"
import Loader from "../Loader"
import { IMeal } from "../../types"

const MealDetails = () => {
  const { mealId } = useParams() as { mealId: string }

  const [mealData, setMealData] = useState<IMeal>()
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetMealByIdQuery(mealId)
  const [updateMealFavourite] = useUpdateMealFavouriteMutation()

  useEffect(() => {
    setMealData(data?.[0])
  }, [data])

  const updateMeal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newMeal: IMeal = {
      id: mealData!.id,
      isFavourite: !mealData!.isFavourite,
      image: mealData!.image,
      name: mealData!.name,
      instructions: mealData!.instructions,
      country: mealData!.country,
      category: mealData!.category,
      area: mealData!.area,
      tags: mealData!.tags,
      ingredients: mealData!.ingredients,
    }
    await updateMealFavourite(newMeal)

    toast.custom((t) => (
      <div
        className={`bg-green-100 px-6 py-4 shadow-lg rounded transition ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        {mealData?.isFavourite ? (
          <>
            You removed
            <span className="inline-block text-red-500 font-bold px-1">
              {mealData?.name}
            </span>
            from favourites
          </>
        ) : (
          <>
            You added
            <span className="inline-block text-red-500 font-bold px-1">
              {mealData?.name}
            </span>
            to favourites
          </>
        )}
      </div>
    ))
  }

  return (
    <section className="py-10 md:pb-14">
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
          <div className="flex flex-wrap">
            <div className="w-full mb-7 md:w-5/12 md:pr-10 sm:mb-0">
              <div className="sticky top-5">
                <div className="relative">
                  <button
                    onClick={updateMeal}
                    className={`absolute top-3 right-3 z-10 w-10 h-10 inline-flex items-center justify-center p-3 text-amber-500 bg-white rounded-full transition hover:text-amber-500 hover:bg-white dark:bg-slate-100 ${
                      mealData?.isFavourite ? "border-2 border-amber-500" : null
                    }`}
                    type="button"
                  >
                    {mealData?.isFavourite ? (
                      <svg
                        className="w-full"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
                      </svg>
                    )}
                  </button>
                  <img
                    className="w-full rounded"
                    src={mealData?.image}
                    alt={mealData?.name}
                  />
                </div>
                <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-6 mt-5">
                  <h1 className="text-3xl sm:text-4xl font-bold dark:text-slate-200">
                    {mealData?.name}
                  </h1>
                  <div className="flex gap-x-3 sm:items-center sm:flex-row sm:gap-x-6">
                    <div className="flex items-center gap-x-1.5">
                      <span className="w-7 h-7 flex items-center justify-center p-2 flex-shrink-0 text-white bg-green-600 rounded-full dark:bg-green-800">
                        <svg
                          className="w-full"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM57.71 192.1l9.36 17.3a64.042 64.042 0 0 0 38.03 29.8l57 16.5c18.1 4.9 29.9 20.6 29.9 38.5v39.9c0 11 6.2 21 16 25 9.8 5.8 16 15.8 16 26.8v39c0 15.6 14.9 26.8 29.9 22.5 16.2-4.6 28.6-18.3 32.7-33.7l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40.1l8.1-4.6c15-8.5 24.2-24.4 24.2-41.7v-8.2c0-12.8-5.1-25-14.1-34l-3.8-3.8c-9-9-21.3-15-34-15h-44c-10.2 0-21.2-2-30.9-7.5l-34.5-19.8c-4.3-2.4-7.6-6.4-9.1-11.1-3.2-9.6 1.1-20 10.1-24.6l6-2.9c6.6-3.3 14.2-3.9 20.4-1.5l24.1 7.7c8.1 2.7 17.1-.4 21.9-7.5 4.7-7.1 4.2-16.4-1.2-22.9l-13.6-16.2c-10-12-9.9-29.5.3-41.3l15.7-18.38c8.8-10.27 10.2-24.96 3.5-36.7l-2.4-4.16c-4.3-.17-6.9-.26-10.4-.26-92.9 0-171.6 60.9-198.29 144.1zm379.89-37.6L412 164.8c-15.7 6.3-23.8 23.7-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 21l29.2 7.2c1.2-9 1.8-18.2 1.8-27.5 0-36.8-9.6-71.4-26.4-101.5z"></path>
                        </svg>
                      </span>
                      <span className="flex space-x-1 space-x-reverse text-sm font-medium text-slate-600 dark:text-slate-300">
                        {mealData?.area}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-1.5">
                      <span className="w-7 h-7 flex items-center justify-center p-2 flex-shrink-0 text-white bg-orange-600 rounded-full dark:bg-orange-800">
                        <svg
                          className="w-full"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M0 96C0 60.65 28.65 32 64 32H512C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96zM160 256C160 238.3 145.7 224 128 224C110.3 224 96 238.3 96 256C96 273.7 110.3 288 128 288C145.7 288 160 273.7 160 256zM160 160C160 142.3 145.7 128 128 128C110.3 128 96 142.3 96 160C96 177.7 110.3 192 128 192C145.7 192 160 177.7 160 160zM160 352C160 334.3 145.7 320 128 320C110.3 320 96 334.3 96 352C96 369.7 110.3 384 128 384C145.7 384 160 369.7 160 352zM224 136C210.7 136 200 146.7 200 160C200 173.3 210.7 184 224 184H448C461.3 184 472 173.3 472 160C472 146.7 461.3 136 448 136H224zM224 232C210.7 232 200 242.7 200 256C200 269.3 210.7 280 224 280H448C461.3 280 472 269.3 472 256C472 242.7 461.3 232 448 232H224zM224 328C210.7 328 200 338.7 200 352C200 365.3 210.7 376 224 376H448C461.3 376 472 365.3 472 352C472 338.7 461.3 328 448 328H224z"></path>
                        </svg>
                      </span>
                      <span className="flex space-x-1 space-x-reverse text-sm font-medium text-slate-600 dark:text-slate-300">
                        {mealData?.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-5 dark:text-slate-200">
                  Ingredients
                </h2>
                <div className="grid grid-cols-2 auto-rows-fr gap-4 sm:grid-cols- lg:grid-cols-3 xl:grid-cols-4">
                  {mealData?.ingredients.map(
                    (ingredient: Ingredient, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-y-1 text-center text-xl bg-gray-100 p-4 rounded-xl transition hover:bg-lime-300 hover:drop-shadow-md hover:-translate-y-1 dark:bg-slate-800 dark:hover:bg-slate-700"
                        >
                          <img
                            className="w-full"
                            src={ingredient.image}
                            alt={ingredient.name}
                          />
                          <span className="dark:text-slate-200">
                            {ingredient.measure}
                          </span>
                          <span className="dark:text-slate-200">
                            {ingredient.name}
                          </span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
              <div className="w-full pt-9">
                <h3 className="text-3xl font-bold mb-4 dark:text-slate-200">
                  Instructions
                </h3>
                <p className="text-base leading-relaxed dark:text-slate-300">
                  {mealData?.instructions}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default MealDetails
