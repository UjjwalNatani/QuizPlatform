import Typewriter from './Animation'; // Import the Typewriter component from Animation.js
import { Navbar } from '../Components/Navbar'; // Import the Navbar component from ../Components/Navbar.js

export function Home() {
  // This function renders the Home component of the application
  return (
    <div id="home">
      <Navbar /> {/* Render the Navbar component */}
      <div className="title">
        <div className="typewriter">
          <Typewriter text="Welcome To QuizWise" /> {/* Display animated text "Welcome To QuizWise" */}
        </div>
      </div>
      <div className="homediv">
        <a href="/Createquiz" className="create-div quiz1"> 
          {/* Link to Create a Quiz page */}
        </a>
        <a href="/Myquiz" className="create-div quiz2">
          {/* Link to My Quizzes page */}
        </a>
      </div>
    </div>
  );
}
