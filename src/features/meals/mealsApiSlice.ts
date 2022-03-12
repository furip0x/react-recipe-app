import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMeal, IMealItems } from "../../types"

export const mealsApi = createApi({
  reducerPath: "mealSearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_API_KEY}.mockapi.io/api`,
  }),
  tagTypes: ["Meals"],
  endpoints: (builder) => ({
    meals: builder.query<IMeal[], string>({
      query: (name) => `/meals?search=${name}`,
      providesTags: ["Meals"],
    }),
    getMealById: builder.query<IMeal, string>({
      query: (id) => `/meals?filter=${id}`,
      providesTags: ["Meals"],
    }),
    getMealsByName: builder.mutation<IMeal[], string>({
      query: (name) => `/meals?search=${name}`,
      invalidatesTags: ["Meals"],
    }),
    updateMealFavourite: builder.mutation<void, IMealItems>({
      query: ({ id, ...rest }) => ({
        url: `/meals/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Meals"],
    }),
  }),
})

export const {
  useMealsQuery,
  useGetMealByIdQuery,
  useGetMealsByNameMutation,
  useUpdateMealFavouriteMutation,
} = mealsApi
