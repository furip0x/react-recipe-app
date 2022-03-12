import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IModal } from "../types"

const initialState: IModal = {
  isVisible: false,
  mealId: "",
  image: "",
  name: "",
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModal>) => {
      return {
        ...state,
        isVisible: true,
        ...action.payload,
      }
    },
    closeModal: (state, action: PayloadAction<void>) => {
      return initialState
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
