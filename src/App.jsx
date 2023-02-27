import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import bgImage from "./4.jpg"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages"  style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "300vh"}}>
          <Routes>
            <Route 
              path="/"
              element={<Home/>}  />

              <Route 
              path="/login"
              element={<Login/>}  />

              <Route 
              path="/signup"
              element={<Signup/>}  />
          </Routes>
        </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
