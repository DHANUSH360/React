import Navbar from "./components/header/Navbar"
import Category from "./components/sections/Category"
import Banner from "./components/sections/Banner"
import Brands from "./components/sections/Brands"
import Trending from "./components/sections/Trending"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Category />
      <Banner />
      <Brands/>
      <Trending/>
      <Footer/>
    </>
  )
}

export default App