import Navbar from './component/Navbar';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route, Routes,} from "react-router-dom";
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import UpdateBook from './component/UpdateBook';
import DeleteBook from './component/DeleteBook';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/books' element={<Books/>}/>
        <Route  path='/addBooks' element={<AddBooks/>}/>        
        <Route  path="/update/:id" element={<UpdateBook />} />       
        <Route  path='/delete/:id' element={<DeleteBook/>}/>        
      </Routes>
    </Router>
  )
}

export default App;
