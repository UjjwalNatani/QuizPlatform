import { Button } from "@mui/material";
import { Navbar } from "./Navbar";

export function PlayQuiz() {
    const parsedData = JSON.parse(localStorage.getItem("quiz"));

    let mcqQuestions;
    {
        let mcqQues = parsedData.mcqQuestions;
        if (mcqQues.length !== 0) {
            mcqQuestions = mcqQues;
        } else if (mcqQues.length === 0) {
            mcqQuestions = [];
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

    const questions = [mcqQuestions,shortQuestions,longQuestions];
    
    return (
        <div className="play-main-div">
            <Navbar/>
            <h1 style={{fontSize:"80px",marginLeft:"20px", marginTop:'20px'}}>Quiz Title : {parsedData.title}</h1>
            <h1 style={{fontSize:"40px",marginLeft:"20px", marginTop:'20px'}}>Description : {parsedData.description}</h1>
            <Button style={{marginTop:"100px", borderRadius:"50px"}} href="/Startquiz" variant="contained" onClick={()=>{
                localStorage.setItem("questions", JSON.stringify(questions));
            }}> Start Quiz </Button>
        </div>
    )
}