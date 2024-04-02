import './App.css';
import { Home } from './Components/Home';
import { Createquiz } from './Components/Createquiz';
import { Myquiz } from './Components/Myquiz';
import { PlayQuiz } from './Components/PlayQuiz';
import { Startquiz } from './Components/Startquiz';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div >
      <Routes>
        {/* Define routing for different paths */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Createquiz' element={<Createquiz/>} />
        <Route path='/Myquiz' element={<Myquiz/>} />
        <Route path='/PlayQuiz' element={<PlayQuiz/>} />
        <Route path='/Startquiz' element={<Startquiz/>} />
      </Routes>
    </div>
  );
}

export default App;
