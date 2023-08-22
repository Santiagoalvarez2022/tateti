import {Routes,Route} from "react-router-dom"
import { HomePage,CuatroPage,TatetiPage} from "./pages"
import style from "./App.module.css"
import Footer from "../src/components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
function App() {

  return (
    <div className={style.app }>
      <Header />
      <Routes>
        <Route  path="/"  element={<HomePage />}   />
        <Route  path="/tateti"  element={<TatetiPage />} />
        <Route  path="/fourinline"  element={<CuatroPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App