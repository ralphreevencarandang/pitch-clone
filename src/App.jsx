import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurTents from "./sections/OurTents"
import Packages from "./sections/Packages"
import Booking from "./sections/Booking"




function App() {

  return (

  
      <Router>
          <Routes>
            <Route path="/ourTents" element={<OurTents />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
    
      </Router>
   
  )
}

export default App
