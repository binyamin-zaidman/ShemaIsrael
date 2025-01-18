import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className="callout w-100 h-100 ">
      <Navbar />
      <Carousel/>
      <Footer />
      </div>
    </>
  )
}

export default App
