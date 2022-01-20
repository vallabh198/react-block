
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { BlockProvider } from './Components/BlockContext';
import {Bollywood} from './Components/Bollywood'
import Hollywood from './Components/Hollywood';
import Technology from './Components/Technology';
import Fitness from './Components/Fitness';
import{ Food} from './Components/Food';
import Header from './Components/Header';
import Home from './Components/Home';
import { BlogPost } from "./Components/DetailsPage";

function App() {
  return (
    <div>
      <BlockProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/bollywood' element={<Bollywood />} />
            <Route path='/hollywood' element={<Hollywood />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/fitness' element={<Fitness />} />
            <Route path='/food' element={<Food />} />
            <Route path='/detailsPage/:id' element={< BlogPost />} />
            
           
          </Routes>
        </Router>
      </BlockProvider>
    </div>

  );
}

export default App;




