import { Navbar } from "./components/Navbar"
import { SectionCards } from "./components/CardsGrid"

function App() {

  return (
    <div className="bg-white w-full">
      <div className="container mx-auto h-full w-screen flex flex-col justify-center px-10 py-10">
          <Navbar />
          <SectionCards />
      </div>       
    </div>
  )
}

export default App
