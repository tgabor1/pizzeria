import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
      <BrowserRouter>
      <TopBar/>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Policy' element={<Policy/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
