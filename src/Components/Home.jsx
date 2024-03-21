import Typewriter from "../Animation";
import { Navbar } from '../Components/Navbar';

export function Home() {
    return (
        <div id="home">
            <Navbar/>
            <div className="title">
                <div className="typewriter">
                    <Typewriter text='Welcome To QuizWise' />
                </div>
            </div>
            <div className="homediv">
                <a href='/Createquiz' className="create-div quiz1"></a>
                <a href="/Myquiz" className="create-div quiz2"></a>
            </div>
        </div>
    )
}