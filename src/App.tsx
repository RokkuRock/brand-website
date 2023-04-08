import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import Login from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import SearchEngine from "./context/SearchEngine";

function App() {
  return (
  <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <SearchEngine></SearchEngine>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/store" element={<Store/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/login" element={<Login/> } />
      </Routes>
    </Container>
  </ShoppingCartProvider>
  )
}

export default App
