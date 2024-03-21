import { Navbar } from "./Navbar";
import Button from '@mui/material/Button';

export function Myquiz() {
    return (
        <div id="Myquiz">
            <Navbar />
            <div className="my-quiz-main">
                <h1>My Quizzes</h1>
                <Button href="/Createquiz" variant="contained" style={{ marginLeft: '900px', height: "40px" }}> Create New Quiz </Button>
            </div>
            <div className="my-quizzes">
                <label>Title</label>
                <label>Created On</label>
                <label>Actions</label>
                <label>Play Quiz</label>
            </div>
            <div className="my-quizzes">
                
            </div>

        </div>
    )
}