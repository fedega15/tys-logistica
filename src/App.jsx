import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import bgImage from "./4.jpg"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
  
            <Navbar2/>
          <Routes>
            <Route 
              path="/"
              element={<Home/>} />

              <Route 
              path="/login"
              element={<Login/>}  />

              <Route 
              path="/signup"
              element={<Signup/>}  />
          </Routes>
        
      
      </BrowserRouter>
    </div>
  );
}

export default App;
