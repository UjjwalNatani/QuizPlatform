import './App.css';
import { Home } from './Components/Home';
import { Createquiz } from './Components/Createquiz';
import { Myquiz } from './Components/Myquiz';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Createquiz' element={<Createquiz/>} />
        <Route path='/Myquiz' element={<Myquiz/>} />
      </Routes>
    </div>
  );
}

export default App;
