import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useRef } from 'react';
import { Navbar } from './Navbar';

export function Startquiz() {
    // State variables to track quiz progress, current question index and scores
    const [shortScore, setShortScore] = useState(false);
    const [longScore, setLongScore] = useState(false);
    const [mcqScore, setMcqScore] = useState(false);
    const [screen, setScreen] = useState(true);
    const [correct, setCorrect] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Get quiz data and parsed data from localStorage
    const questions = JSON.parse(localStorage.getItem("questions"));
    const parsedData = JSON.parse(localStorage.getItem("quiz"));

    // Separate questions by type
    let mcqData;
    let shortData;
    let longData;

    if (questions[0].length > 0) {
        mcqData = questions[0];
    }
    else if (questions[1].length > 0) {
        shortData = questions[1];
    }
    else if (questions[2].length > 0) {
        longData = questions[2];
    }

    // Variable to store user's answer
    let userAnswer;

    // Helper functions to handle user input for different question types
    const handleShortDataChange = (event) => {
        userAnswer = event.target.value;
    };

    const handleLongDataChange = (event) => {
        userAnswer = event.target.value;
    };
    const handleMcqDataChange = (index) => {
        userAnswer = index;
    };

    // useRef hook to access the text field element
    const textFieldRef = useRef(null);

    // Functions to handle next question and submit answer for short answer questions
    const handleShortNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (userAnswer === shortData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);          // Update correct answer count
        }
        textFieldRef.current.value = '';      // Clear the text field  
    };

    const handleShortSubmitQuestion = () => {
        if (userAnswer === shortData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);
        }
        setShortScore(true);                  // Set flag to display short answer score
        setScreen(false);                     // Hide question screen
    }

    // Functions to handle next question and submit answer for short answer questions
    const handleLongNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (userAnswer === longData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);         // Update correct answer count
        }
        textFieldRef.current.value = '';     // Clear the text field

    };

    const handleLongSubmitQuestion = () => {
        if (userAnswer === longData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);
        }
        setLongScore(true);                  // Set flag to display short answer score
        setScreen(false);                    // Hide question screen
    }

    // Functions to handle next question and submit answer for short answer questions
    const handleMcqNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (userAnswer === mcqData[currentQuestionIndex].rightOption) {
            setCorrect(correct + 1);         // Update correct answer count
        }

        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radioButton => {
            radioButton.checked = false;      // Clear the selected radio button 
        });
    };

    const handleMcqSubmitQuestion = () => {
        if (userAnswer === mcqData[currentQuestionIndex].rightOption) {
            setCorrect(correct + 1);
        }
        setMcqScore(true);                  // Set flag to display short answer score
        setScreen(false);                   // Hide question screen
    }

    return (
        <div className="start-main-div">
            {/* Conditionally render content based on the 'screen' state */}
            {screen ?
                <div>
                    {/* Render Navbar component */}
                    <Navbar />
                    {/* Render title */}
                    <h1 style={{ textAlign: "center", marginTop: '40px', textShadow: '3px 3px 3px rgba(255,255,255,0.6)' }}>{parsedData.title}</h1>
                    {/* Render multiple choice questions if data is available */}
                    {
                        mcqData === undefined ? null :
                            <div className='start-questions'>
                                <h1>Ques No {currentQuestionIndex + 1} : {mcqData[currentQuestionIndex].question}</h1>
                                {
                                    mcqData[currentQuestionIndex].options.map((option, index) => (
                                        <div key={index}>
                                            <input className='start-questions-options' type="radio" name='options' onClick={() => handleMcqDataChange(index)} />{option}
                                        </div>

                                    ))}
                                {/* Render next or submit button based on question index */}
                                {currentQuestionIndex < mcqData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleMcqNextQuestion} variant="contained"> Next Ques </Button>
                                )}
                                {currentQuestionIndex === mcqData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleMcqSubmitQuestion} variant="contained"> Submit </Button>
                                )}
                            </div>
                    }

                    {/* Render short answer questions if data is available */}
                    {
                        shortData === undefined ? null :
                            <div className='start-questions'>
                                <h1>Ques No {currentQuestionIndex + 1} : {shortData[currentQuestionIndex].question}</h1>
                                <TextField
                                    className="textfield-answer"
                                    color="primary"
                                    variant="filled"
                                    focused
                                    required
                                    id={`answer-${currentQuestionIndex}`}
                                    label="Answer"
                                    placeholder="Enter Your Answer"
                                    inputRef={textFieldRef}
                                    onChange={(event) => handleShortDataChange(event)}
                                />
                                {currentQuestionIndex < shortData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleShortNextQuestion} variant="contained"> Next Ques </Button>
                                )}
                                {currentQuestionIndex === shortData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleShortSubmitQuestion} variant="contained"> Submit </Button>
                                )}
                            </div>
                    }

                     {/* Render long answer questions if data is available */}
                    {
                        longData === undefined ? null :
                            <div className='start-questions'>
                                <h1>Ques No {currentQuestionIndex + 1} : {longData[currentQuestionIndex].question}</h1>
                                <TextField
                                    className="textfield-answer"
                                    color="primary"
                                    variant="filled"
                                    focused
                                    required
                                    id={`answer-${currentQuestionIndex}`}
                                    label="Answer"
                                    multiline
                                    rows={5}
                                    placeholder="Enter Your Answer"
                                    inputRef={textFieldRef}
                                    onChange={(event) => handleLongDataChange(event)}
                                />
                                {currentQuestionIndex < longData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleLongNextQuestion} variant="contained"> Next Ques </Button>
                                )}
                                {currentQuestionIndex === longData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleLongSubmitQuestion} variant="contained"> Submit </Button>
                                )}
                            </div>
                    }

                </div>
                : null}

            {/* Render short answer score if available */}
            {shortScore ? <div className='start-score'>
                <Navbar />
                <h1 style={{ fontSize: '80px' }}>You have {correct > shortData.length / 2 ? 'passed' : 'failed'} the quiz & scored {correct} out of {shortData.length}</h1>
            </div> : null}

            {/* Render long answer score if available */}
            {longScore ? <div className='start-score'>
                <Navbar />
                <h1 style={{ fontSize: '80px' }}>You have {correct > shortData.length / 2 ? 'passed' : 'failed'} the quiz & scored {correct} out of {longData.length}</h1>
            </div> : null}

            {/* Render MCQ answer score if available */}
            {mcqScore ? <div className='start-score'>
                <Navbar />
                <h1 style={{ fontSize: '80px' }}>You have {correct > mcqData.length / 2 ? 'passed' : 'failed'} the quiz & scored {correct} out of {mcqData.length}</h1>
            </div> : null}
        </div>
    )
}