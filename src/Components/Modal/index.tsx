import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { closeModal } from "../../features/modalSlice"

const Modal = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const modal = useAppSelector((state) => state.modal)

  const seeDetails = () => {
    dispatch(closeModal())
    navigate(`/meal/${modal.mealId}`)
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="text-center rounded-t">
              <img
                className="w-full max-h-56 object-cover"
                src={modal.image}
                alt={modal.name}
              />
            </div>
            {/*body*/}
            <div className="text-center px-6 pb-4 pt-3">
              <h3 className="text-2xl font-semibold">Your lucky meal is</h3>
              <h4 className="text-amber-500 text-3xl font-bold">
                {modal.name}
              </h4>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-gray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:underline"
                type="button"
                onClick={() => dispatch(closeModal())}
              >
                Close
              </button>
              <button
                type="button"
                className="bg-green-500 text-white hover:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={seeDetails}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal
