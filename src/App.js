import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToDoList from './components/ToDoList/ToDoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Single from './components/Single/Single';
import ChartSection from './components/ChartSection/ChartSection';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
     <BrowserRouter>     
      <Header></Header> 
        <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/todo" element={<ToDoList/>} />
        <Route path="/toDoList/:listId" element={<Single/>} />
        <Route path="/chart" element={<ChartSection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
       
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
