import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';
import Header from "./components/header/Header";
import About from "./components/about/About";

function App() {
  return ( 
    <>
        <Navbar/>  
        <Header />
        <About />
    </>  
  );
}

export default App;
