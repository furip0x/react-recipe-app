import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import MealDetailsPage from "./pages/MealDetailsPage"
import FavouritesPage from "./pages/FavouritesPage"
import NotFound from "./Components/NotFound"
import Modal from "./Components/Modal"
import { useAppSelector } from "./app/hooks"

function App() {
  const modal = useAppSelector((state) => state.modal)

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen bg-white dark:bg-slate-900">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="meal/:mealId" element={<MealDetailsPage />} />
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {modal.isVisible && <Modal />}
        <Toaster
          position="bottom-center"
          gutter={10}
          toastOptions={{ duration: 2000 }}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
