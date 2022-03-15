import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const darkModeMediaQuery = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
const darkModeLocalStorage = localStorage.getItem("isDarkTheme")

const initialState = {
  isDark:
    darkModeLocalStorage === null
      ? darkModeMediaQuery
      : darkModeLocalStorage === "true",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<void>) => {
      state.isDark = !state.isDark
      localStorage.setItem("isDarkTheme", state.isDark.toString())
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
