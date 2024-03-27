import { Navbar } from "./Navbar";
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useEffect, useState} from 'react';

export function Myquiz() {
    const select=useSelector((state)=>state.addQuiz);
    const [quizData, setQuizData] = useState(null);


    useEffect(() => {
        const storedData = localStorage.getItem("data_local");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setQuizData(parsedData);
        }
    }, []);

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
            {/* {quizData && (
                <div>
                    <h2>{quizData.title}</h2>
                    <p>{quizData.description}</p>
                </div>
            )} */}
            value:{select}
            </div>

        </div>
    )
}