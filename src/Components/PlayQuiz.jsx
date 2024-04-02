import { Button } from "@mui/material";
import { Navbar } from "./Navbar";

export function PlayQuiz() {
    // Get the quiz data from localStorage
    const parsedData = JSON.parse(localStorage.getItem("quiz"));

  // Separate MCQ, Short, and Long questions into separate arrays with default values
    let mcqQuestions;
    {
        let mcqQues = parsedData.mcqQuestions;
        if (mcqQues.length !== 0) {
            mcqQuestions = mcqQues;
        } else if (mcqQues.length === 0) {
            mcqQuestions = [];              // Ensure mcqQuestions is always an array
        }
    }

    let shortQuestions = [];
    {
        let shortQues = parsedData.shortQuestions;
        if (shortQues.length !== 0) {
            shortQuestions = shortQues;
        }
    }

    let longQuestions = [];
    {
        let longQues = parsedData.longQuestions;
        if (longQues.length !== 0) {
            longQuestions = longQues;
        }
    }

    let question_number;
    if(mcqQuestions.length>0){
        question_number = mcqQuestions.length;
    }else if(shortQuestions.length>0){
        question_number = shortQuestions.length;
    }else if(longQuestions.length>0){
        question_number = longQuestions.length;
    }

    // Combine all question types into a single array
    const questions = [mcqQuestions,shortQuestions,longQuestions];
    
    return (
        <div className="play-main-div">
            <Navbar/>
            <h1 className="play-title">Quiz Title : {parsedData.title}</h1>
            <h2 className="play-description">Description : {parsedData.description}</h2>
            <h3 className="play-question">This Quiz Contains {question_number} Questions</h3>
            
            <Button style={{marginTop:"100px", borderRadius:"50px"}} href="/Startquiz" variant="contained" onClick={()=>{
                localStorage.setItem("questions", JSON.stringify(questions));
            }}> Start Quiz </Button>
        </div>
    )
}