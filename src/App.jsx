import Nav from "./components/Nav"
import Inicio from "./components/Inicio"
import Quote from "./components/Quote"
import MyQuotes from "./components/MyQuotes"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quote/:quote/:author" element={<Quote />} />
        <Route path="/myquotes" element={<MyQuotes />} />
      </Routes>
    </>
  )
}

export default App
