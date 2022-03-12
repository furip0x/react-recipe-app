import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { mealsApi } from "../features/meals/mealsApiSlice"
import modalSlice from "../features/modalSlice"

export const store = configureStore({
  reducer: {
    [mealsApi.reducerPath]: mealsApi.reducer,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
