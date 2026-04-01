import Header from "./components/Header"
import Footer from "./components/Footer"
import BowlSelection from "./components/BowlSelection"
import BaseSelection from "./components/BaseSelection"
import IngredientSection from "./components/IngredientSection"
import SummaryBar from "./components/SummaryBar"
import Configurator from "./pages/Configurator"
import { Routes, Route } from "react-router-dom"
import Community from "./pages/Community"
import Print from "./pages/Print"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      <main className="flex-1 max-w-6x1 w-full mx-auto p-6 flex flex-col gap-8 mt-4">
        
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch">
            <BowlSelection />
            <Routes>
              <Route path="./pages/Configurator.tsx" element={<Configurator />} />
              <Route path="./page/Community.tsx" element={<Community />} />
              <Route path="./pages/Print.tsx" element={<Print />}/>
            </Routes>
            <BaseSelection />
          </div>
          <IngredientSection />

          <SummaryBar />

          
        
      </main>

      <Footer />
    </div>
  )
}

export default App