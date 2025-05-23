import './App.css'
import Carousel from './components/Carousel'
import Context from './components/context'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className="callout w-100">
      <Navbar />
      <Context/>
      <Carousel/>
      <Footer />
      </div>
    </>
  )
}

export default App
