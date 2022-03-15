import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { mealsApi } from "../features/meals/mealsApiSlice"
import modalSlice from "../features/modalSlice"
import themeSlice from "../features/themeSlice"

export const store = configureStore({
  reducer: {
    [mealsApi.reducerPath]: mealsApi.reducer,
    modal: modalSlice,
    theme: themeSlice,
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
