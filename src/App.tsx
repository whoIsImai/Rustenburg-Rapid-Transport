import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NotFound from './components/NoPage'
import SignInPage from './components/Sign in'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignInPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
