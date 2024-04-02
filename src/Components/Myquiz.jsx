import { Navbar } from "./Navbar";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function Myquiz() {
    // Check if there's any quiz data stored in localStorage
    if (JSON.parse(localStorage.getItem("myData"))) {
        var parsedData = JSON.parse(localStorage.getItem("myData"));

        // Separate MCQ, Short, and Long questions into different arrays
        var mcqQuestions = [];
        for (let a = 0; a < parsedData.length; a++) {
            let mcqQues = parsedData[a].mcqQuestions;
            if (mcqQues.length !== 0) {
                mcqQuestions.push(mcqQues);
            }
        }

        var shortQuestions = [];
        for (let a = 0; a < parsedData.length; a++) {
            let shortQues = parsedData[a].shortQuestions;
            if (shortQues.length !== 0) {
                shortQuestions.push(shortQues);
            }
        }

        var longQuestions = [];
        for (let a = 0; a < parsedData.length; a++) {
            let longQues = parsedData[a].longQuestions;
            if (longQues.length !== 0) {
                longQuestions.push(longQues);
            }
        }
    } else {
        // Render nothing if there's no quiz data
        return (
            <div></div>
        )
    }

    // Render content if there's quiz data
    return (
        <div id="Myquiz">
            <Navbar />
            <div className="my-quiz-main">
                <h1>My Quizzes</h1>
                <Button href="/Createquiz" variant="contained" style={{ marginLeft: '900px', height: "40px" }}> Create New Quiz </Button>
            </div>
            <div className="my-quizzes">
                {/* Table header */}
                <table style={{ width: "98%", margin: '10px' }}>
                    <tr>
                        <th style={{ width: '15%' }}>Quiz Number</th>
                        <th style={{ width: '50%' }}>Title Of The Quizzes</th>
                        <th style={{ width: '12%' }}>Created On</th>
                        <th style={{ width: '12%' }}>Play Quiz</th>
                        <th style={{ width: '11%' }}>Delete Quiz</th>
                    </tr>
                </table>

                {/* Display each quiz using parsed data */}
                {parsedData.map((parsed, index) => (
                    <div key={index} >
                        <table style={{ width: "98%", margin: '20px' }}>
                            <tr>
                                <td style={{ width: '15%' }}>{index + 1}</td>
                                <td style={{ width: '50%' }}>{parsed.title}</td>
                                <td style={{ width: '12%' }}>{parsed.date}</td>
                                <td style={{ width: '12%' }}> <button className="btn btn-success" style={{ height: '35px' }} onClick={() => {
                                    localStorage.setItem("quiz", JSON.stringify(parsed));
                                }}><Link to="/PlayQuiz" style={{ textDecoration: 'none', color: 'white' }}> Play</Link></button></td>
                                <td style={{ width: '11%' }}> <button className="btn btn-danger" style={{ height: '35px' }} onClick={() => {
                                    parsedData.splice(index, 1);
                                    localStorage.setItem("myData", JSON.stringify(parsedData));
                                }}><a href="/Myquiz" style={{ textDecoration: 'none', color: 'white' }}> Delete</a></button></td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    )
}