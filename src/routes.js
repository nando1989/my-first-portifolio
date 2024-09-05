import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import MeusProjetos from "./pages/sobre/sobre"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/home" element={ <Home />}></Route>
        <Route path="/sobre" element={ <MeusProjetos />}></Route>
        <Route path="/" element={ <Home/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes