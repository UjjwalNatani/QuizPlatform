import { Navbar } from "./Navbar"
import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneIcon from '@mui/icons-material/Done';


export function Createquiz() {
    const [Show, setShow] = useState(false);
    const [Disable, setDisable] = useState(true);
    const [shortQuestions, setShortQuestions] = useState([]);
    const [longQuestions, setLongQuestions] = useState([]);
    const [mcqQuestions, setMcqQuestions] = useState([]);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const date = () => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const date = currentDate.getDate();
        return `${date}/${month}/${year}`;
    };

    const handleLongQuestionChange = (questionIndex, event) => {
        const updatedQuestions = [...longQuestions];
        updatedQuestions[questionIndex].question = event.target.value;
        setLongQuestions(updatedQuestions);
    };

    const handleLongAnswerChange = (questionIndex, event) => {
        const updatedQuestions = [...longQuestions];
        updatedQuestions[questionIndex].answer = event.target.value;
        setLongQuestions(updatedQuestions);
    };

    const addLongQuestion = (event) => {
        const updatedQuestions = [...longQuestions];
        updatedQuestions.push({ question: '' });
        setLongQuestions(updatedQuestions);
        setShow(false);
        setDisable(true);
        setButtonDisabled(event.target.value === '');
    };

    const removeLongQuestion = (questionIndex) => {
        const updatedQuestions = [...longQuestions];
        updatedQuestions.splice(questionIndex, 1);
        setLongQuestions(updatedQuestions);
    };

    const handleShortQuestionChange = (questionIndex, event) => {
        const updatedQuestions = [...shortQuestions];
        updatedQuestions[questionIndex].question = event.target.value;
        setShortQuestions(updatedQuestions);
    };

    const handleShortAnswerChange = (questionIndex, event) => {
        const updatedQuestions = [...shortQuestions];
        updatedQuestions[questionIndex].answer = event.target.value;
        setShortQuestions(updatedQuestions);
    };

    const addShortQuestion = (event) => {
        const updatedQuestions = [...shortQuestions];
        updatedQuestions.push({ question: '' });
        setShortQuestions(updatedQuestions);
        setShow(false);
        setDisable(true);
        setButtonDisabled(event.target.value === '');
    };

    const removeShortQuestion = (questionIndex) => {
        const updatedQuestions = [...shortQuestions];
        updatedQuestions.splice(questionIndex, 1);
        setShortQuestions(updatedQuestions);
    };

    const handleMCQQuestionChange = (questionIndex, event) => {
        const updatedQuestions = [...mcqQuestions];
        updatedQuestions[questionIndex].question = event.target.value;
        setMcqQuestions(updatedQuestions);
    };

    const handleMCQOptionChange = (questionIndex, optionIndex, event) => {
        const updatedQuestions = [...mcqQuestions];
        updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
        setMcqQuestions(updatedQuestions);
    };

    const addOption = (questionIndex) => {
        const updatedQuestions = [...mcqQuestions];
        const optionsCount = updatedQuestions[questionIndex].options.length;
        if (optionsCount < 4) {
            updatedQuestions[questionIndex].options.push('');
            setMcqQuestions(updatedQuestions);
        } else {
            window.alert("Maximum number of options (4) reached for this question.");
        }
    };

    const removeOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...mcqQuestions];
        const optionsCount = updatedQuestions[questionIndex].options.length;
        if (optionsCount > 2) {
            updatedQuestions[questionIndex].options.splice(optionIndex, 1);
            setMcqQuestions(updatedQuestions);
        } else {
            window.alert("There must be at least two options for this question.");
        }
    };

    const addMCQQuestion = (event) => {
        const updatedQuestions = [...mcqQuestions];
        updatedQuestions.push({ question: '', options: [''], rightOption: '' });
        setMcqQuestions(updatedQuestions);
        setShow(false);
        setDisable(true);
        setButtonDisabled(event.target.value === '');
    };

    const removeMCQQuestion = (questionIndex) => {
        const updatedQuestions = [...mcqQuestions];
        updatedQuestions.splice(questionIndex, 1);
        setMcqQuestions(updatedQuestions);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setButtonDisabled(event.target.value === '');
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    let allData;
    const storedData = localStorage.getItem("myData");
    if (!storedData || storedData === "undefined" || storedData == null) {
        allData = [];
    } else {
        allData = JSON.parse(localStorage.getItem("myData"));
    }

    const data = {
        title: title,
        description: description,
        mcqQuestions: mcqQuestions,
        shortQuestions: shortQuestions,
        longQuestions: longQuestions,
        date: date(),
    };

    const handleSaveButtonClick = () => {
        console.log(mcqQuestions);
        const updated = [...allData, data];
        localStorage.setItem("myData", JSON.stringify(updated));
    };

    const [rightOptions, setRightOptions] = useState(Array(mcqQuestions.length).fill(null));

    const rightOption = (questionIndex, optionIndex) => {
        setRightOptions(prevRightOptions => {
            const newRightOptions = [...prevRightOptions];
            newRightOptions[questionIndex] = optionIndex;
            return newRightOptions;
        });
        const updatedQuestions = [...mcqQuestions];
        updatedQuestions[questionIndex].rightOption = optionIndex;
        setMcqQuestions(updatedQuestions);
    };

    return (<div style={{ height: '80vh', width: '100vw' }}>
        {Show ? <div className="addquestion-button-div1">
            <div className="addquestion-button-div2">
                <h1>Select Your Quiz Type</h1><br /><br />
                <div className="addquestion-options">
                    <Button variant="contained" size="large" onClick={addMCQQuestion}>MCQ</Button>
                    <Button variant="contained" size="large" onClick={addShortQuestion}>Short Questions</Button>
                    <Button variant="contained" size="large" onClick={addLongQuestion}>Long Questions</Button>
                </div>
            </div>
        </div> : null}
        {Disable ? <div className="create-main-div">

            <Navbar />

            <h1 className="main-head">Create Quiz</h1>
            <div className="create-sub-div">
                <div>
                    <TextField
                        className="textfield"
                        color="primary"
                        variant="filled"
                        focused
                        required
                        id="outlined-required"
                        label="Title"
                        placeholder="Enter Your Title "
                        onChange={handleTitleChange}
                        value={title}
                    />
                    <br />
                    <br />
                    <TextField className="textfield" color="primary" variant="filled"
                        required
                        focused
                        id="outlined-required"
                        label="Description"
                        placeholder="Enter Your Description "
                        multiline
                        rows={5}
                        onChange={handleDescriptionChange}
                        value={description}
                    />

                    <div className="question-div">
                        {longQuestions.map((longQuestion, index) => (
                            <div key={[index, longQuestion.id]}>
                                <br /><br />
                                <h1 className="question-head">Long Question {index + 1}</h1>
                                <TextField
                                    className="textfield-question"
                                    color="primary"
                                    variant="filled"
                                    focused
                                    required
                                    id={`question-${index}`}
                                    label="Question"
                                    placeholder="Enter Your Question"
                                    value={longQuestion.question}
                                    onChange={(event) => handleLongQuestionChange(index, event)}
                                />

                                <TextField
                                    className="textfield-question"
                                    color="primary"
                                    variant="filled"
                                    required
                                    focused
                                    id={`answer-${index}`}
                                    label="Answer"
                                    placeholder="Enter Your Answer"
                                    value={longQuestion.answer}
                                    onChange={(event) => handleLongAnswerChange(index, event)}
                                />
                                <br /><br />
                                <Button
                                    className="textfield-question"
                                    color="success"
                                    variant="outlined"
                                    startIcon={<AddCircleIcon />}
                                    onClick={addLongQuestion}>
                                    Add Long Question
                                </Button>

                                <Button
                                    className="textfield-question"
                                    color="error"
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeLongQuestion(index)}
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="question-div">
                        {shortQuestions.map((shortQuestion, index) => (
                            <div key={[index, shortQuestion.id]}>
                                <br /><br />
                                <h1 className="question-head">Short Question {index + 1}</h1>
                                <TextField
                                    className="textfield-question"
                                    color="primary"
                                    variant="filled"
                                    focused
                                    required
                                    id={`question-${index}`}
                                    label="Question"
                                    placeholder="Enter Your Question"
                                    value={shortQuestion.question}
                                    onChange={(event) => handleShortQuestionChange(index, event)}
                                />

                                <TextField
                                    className="textfield-question"
                                    color="primary"
                                    variant="filled"
                                    required
                                    focused
                                    id={`answer-${index}`}
                                    label="Answer"
                                    placeholder="Enter Your Answer"
                                    value={shortQuestion.answer}
                                    onChange={(event) => handleShortAnswerChange(index, event)}
                                />
                                <br /><br />
                                <Button
                                    className="textfield-question"
                                    color="success"
                                    variant="outlined"
                                    startIcon={<AddCircleIcon />}
                                    onClick={addShortQuestion}>
                                    Add Short Question
                                </Button>

                                <Button
                                    className="textfield-question"
                                    color="error"
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeShortQuestion(index)}
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}


                    </div>

                    <div className="question-div">
                        {mcqQuestions.map((mcqQuestion, index) => (
                            <div key={[index, mcqQuestion.id]}>
                                <br /><br />
                                <h1 className="question-head">MCQ Question {index + 1}</h1>
                                <TextField
                                    className="textfield-question"
                                    color="primary"
                                    variant="filled"
                                    focused
                                    required
                                    id={`question-${index}`}
                                    label="Question"
                                    placeholder="Enter Your Question"
                                    value={mcqQuestion.question}
                                    onChange={(event) => handleMCQQuestionChange(index, event)}
                                />

                                {mcqQuestion.options.map((option, optionIndex) => (
                                    <div key={optionIndex}>
                                        <TextField
                                            className="textfield-question"
                                            color="primary"
                                            variant="filled"
                                            required
                                            focused
                                            id={`option-${index}-${optionIndex}`}
                                            label={`Option ${optionIndex + 1}`}
                                            placeholder="Enter Your Option"
                                            style={{ width: '84%' }}
                                            value={option}
                                            onChange={(event) => handleMCQOptionChange(index, optionIndex, event)}
                                        />
                                        <Button
                                            startIcon={<DeleteIcon />}
                                            onClick={() => removeOption(index, optionIndex)}
                                            title="Remove Option"
                                            style={{ height: "70px" }}
                                        >
                                        </Button>
                                        <Button
                                            startIcon={<DoneIcon />}
                                            onClick={() => rightOption(index, optionIndex)}
                                            disabled={rightOptions[index] === optionIndex}
                                            title="Select Right Option"
                                            style={{ height: "70px" }}
                                        >
                                        </Button>
                                    </div>
                                ))}

                                <Button
                                    color="secondary"
                                    variant="outlined"
                                    startIcon={<AddCircleIcon />}
                                    onClick={() => addOption(index)}
                                    title="Add Option"
                                >
                                    Add Option
                                </Button>

                                <Button
                                    className="textfield-question"
                                    color="success"
                                    variant="outlined"
                                    startIcon={<AddCircleIcon />}
                                    onClick={addMCQQuestion}
                                    title="Add MCQ Question"
                                >
                                    Add MCQ Question
                                </Button>

                                <Button
                                    className="textfield-question"
                                    color="error"
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeMCQQuestion(index)}
                                    title="Delete MCQ Question"
                                >
                                    Delete
                                </Button>
                                <br /><br />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="create-button-div">
                    <Button id="add-question-btn" disabled={isButtonDisabled} variant="outlined" startIcon={<AddIcon />} onClick={() => { return (setShow(true)) }}>
                        Quiz Type
                    </Button>
                    <Button variant="outlined" startIcon={<SaveIcon />} onClick={handleSaveButtonClick}>
                        <a href="/Createquiz" style={{ textDecoration: 'none' }}>Save Quiz</a>
                    </Button>

                </div>
            </div>
        </div> : null}
    </div>
    )
}