import Header from "./components/Header"
import Footer from "./components/Footer"
import BowlSelection from "./components/BowlSelection"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      <BowlSelection />

      <Footer />
    </div>
  )
}

export default App