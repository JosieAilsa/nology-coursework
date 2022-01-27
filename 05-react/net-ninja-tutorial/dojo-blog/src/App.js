
import Navbar from "./Navbar"
import Home from "./Home.jsx"

function App() {
  const newBlog =  "Welcome to the new blog";
  const likes = 50;
  return (
    <div className="App">
      <Navbar/>
      <div className = "content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
