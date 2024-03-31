import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useRef } from 'react';
import { Navbar } from './Navbar';

export function Startquiz() {
    const [shortScore, setShortScore] = useState(false);
    const [longScore, setLongScore] = useState(false);
    const [mcqScore, setMcqScore] = useState(false);
    const [screen, setScreen] = useState(true);
    const [correct, setCorrect] = useState(0);

    const questions = JSON.parse(localStorage.getItem("questions"));
    const parsedData = JSON.parse(localStorage.getItem("quiz"));

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

    let userAnswer;

    const handleShortDataChange = (event) => {
        userAnswer = event.target.value;
    };

    const handleLongDataChange = (event) => {
        userAnswer = event.target.value;
    };
    const handleMcqDataChange = (index) => {
        userAnswer = index;
    };

    const textFieldRef = useRef(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleShortNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (userAnswer === shortData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);
        }
        textFieldRef.current.value = '';
    };

    const handleShortSubmitQuestion = () => {
        if (userAnswer === shortData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);
        }
        setShortScore(true);
        setScreen(false);
    }
    const handleLongNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (userAnswer === longData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);
        }
        textFieldRef.current.value = '';

    };

    const handleLongSubmitQuestion = () => {
        if (userAnswer === longData[currentQuestionIndex].answer) {
            setCorrect(correct + 1);
        }
        setLongScore(true);
        setScreen(false);
    }
    const handleMcqNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (userAnswer === mcqData[currentQuestionIndex].rightOption) {
            setCorrect(correct + 1);
        }

        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radioButton => {
            radioButton.checked = false; 
        });
    };

    const handleMcqSubmitQuestion = () => {
        if (userAnswer === mcqData[currentQuestionIndex].rightOption) {
            setCorrect(correct + 1);
        }
        setMcqScore(true);
        setScreen(false);
    }

    return (
        <div className="start-main-div">
            {screen ?
                <div>
                    <Navbar/>
                    <h1 style={{ textAlign: "center", marginTop: '40px' }}>{parsedData.title}</h1>
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

                                {currentQuestionIndex < mcqData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleMcqNextQuestion} variant="contained"> Next Ques </Button>
                                )}
                                {currentQuestionIndex === mcqData.length - 1 && (
                                    <Button className='start-questions-button' onClick={handleMcqSubmitQuestion} variant="contained"> Submit </Button>
                                )}
                            </div>
                    }

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

            {shortScore ? <div className='start-score'>
                <Navbar />
                <h1 style={{ fontSize: '80px' }}>You have scored {correct} out of {shortData.length}</h1>
            </div> : null}
            {longScore ? <div className='start-score'>
                <Navbar />
                <h1 style={{ fontSize: '80px' }}>You have scored {correct} out of {longData.length}</h1>
            </div> : null}
            {mcqScore ? <div className='start-score'>
                <Navbar />
                <h1 style={{ fontSize: '80px' }}>You have scored {correct} out of {mcqData.length}</h1>
            </div> : null}
        </div>
    )
}