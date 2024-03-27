import { Navbar } from "./Navbar"
import * as React from 'react';
import { useState} from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import {useDispatch, useSelector} from 'react-redux';
import { savequiz } from "../State/Action";
import { useEffect } from "react";

export function Createquiz() {
    const [Show, setShow] = useState(false);
    const [Disable, setDisable] = useState(true);
    const [shortquestions, setSHORTQuestions] = useState([]);
    const [longquestions, setLONGQuestions] = useState([]);
    const [mcqquestions, setMCQQuestions] = useState([]);
    const [remove1, setSHORTRemove] = useState([]);
    const [remove2, setLONGRemove] = useState([]);
    const [remove3, setMCQRemove] = useState([]);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mcq, setMCQ] = useState('');
    const [short, setShort] = useState('');
    const [long, setLong] = useState('');
    const dispatch=useDispatch();
    const select=useSelector((state)=>state.addQuiz);
    // const [mcqcounter, setMCQCounter] = useState(0);
    // const [shortcounter, setSHORTCounter] = useState(0);
    // const [longcounter, setLONGCounter] = useState([]);

   

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setButtonDisabled(event.target.value === '');
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    // const allData={
    //     "title":title,
    //     "description":description,
    // }

    // useEffect(()=>{
    //     localStorage.setItem("data_local",JSON.stringify(allData));
    // },[title, description]);

    const addMCQQuestion = (event) => {
        setMCQQuestions([...mcqquestions, { id: mcqquestions.length + 1 }]);
        setShow(false);
        setDisable(true);
        setButtonDisabled(event.target.value === '');
        // setMCQCounter(mcqcounter+1);
    };

    const addSHORTQuestion = (event) => {
        setSHORTQuestions([...shortquestions, { id: shortquestions.length + 1 }]);
        setShow(false);
        setDisable(true);
        setButtonDisabled(event.target.value === '');
        // setSHORTCounter(shortcounter+1);
    };


    const addLONGQuestion = (event) => {
        setLONGQuestions([...longquestions, { id: longquestions.length + 1 }]);
        setShow(false);
        setDisable(true);
        setButtonDisabled(event.target.value === '');
        // const long=longcounter.length+1;
        // setLONGCounter([...longcounter, { id: longcounter.length + 1, text: `${long}` }]);
    };

    const removeSHORTQuestion = () => {
        setSHORTRemove([...shortquestions, { id: shortquestions.pop() }]);
        setShow(false);
        setDisable(true);
    };

    const removeLONGQuestion = () => {
        setLONGRemove([...longquestions, { id: longquestions.pop() }]);
        setShow(false);
        setDisable(true);
    };

    const removeMCQQuestion = () => {
        setMCQRemove([...mcqquestions, { id: mcqquestions.pop() }]);
        setShow(false);
        setDisable(true);
    };



    return (<div style={{ height: '80vh', width: '100vw' }}>
        {Show ? <div className="addquestion-button-div1">
            <div className="addquestion-button-div2">
                <h1>Select Your Quiz Type</h1><br /><br />
                <div className="addquestion-options">
                    <Button variant="contained" size="large" onClick={addMCQQuestion}>MCQ</Button>
                    <Button variant="contained" size="large" onClick={addSHORTQuestion}>Short Questions</Button>
                    <Button variant="contained" size="large" onClick={addLONGQuestion}>Long Questions</Button>
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
                        {longquestions.map(longquestion => (
                            <div key={longquestion.id}>
                                <br /><br />

                                <h1 className="question-head">Long Questions </h1>
                                <TextField className="textfield-question" color="primary" variant="filled"
                                    focused
                                    required
                                    id="outlined-required"
                                    label="Question"
                                    placeholder="Enter Your Question"
                                />

                                <TextField className="textfield-question" color="primary" variant="filled"
                                    required
                                    focused
                                    id="outlined-required"
                                    label="Options"
                                    placeholder="Enter Your Option"
                                />
                                <Button className="textfield-question" color="success" variant="outlined" startIcon={<AddCircleIcon />} onClick={addLONGQuestion}>
                                    Add Long Question
                                </Button>
                                <Button className="textfield-question" color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={removeLONGQuestion}>
                                    Delete
                                </Button>
                                <br /><br />
                            </div>
                        ))}
                    </div>

                    <div className="question-div">
                        {shortquestions.map(shortquestion => (
                            <div key={shortquestion.id}>
                                <br /><br />
                                <h1 className="question-head">Short Questions</h1>
                                <TextField className="textfield-question" color="primary" variant="filled"
                                    focused
                                    required
                                    id="outlined-required"
                                    label="Question"
                                    placeholder="Enter Your Question"
                                />

                                <TextField className="textfield-question" color="primary" variant="filled"
                                    required
                                    focused
                                    id="outlined-required"
                                    label="Options"
                                    placeholder="Enter Your Option"
                                />
                                <Button className="textfield-question" color="success" variant="outlined" startIcon={<AddCircleIcon />} onClick={addSHORTQuestion}>
                                    Add Short Question
                                </Button>
                                <Button className="textfield-question" color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={removeSHORTQuestion}>
                                    Delete
                                </Button>
                                <br /><br />
                            </div>
                        ))}
                    </div>


                    <div className="question-div">
                        {mcqquestions.map(mcqquestion => (
                            <div key={mcqquestion.id}>
                                <br /><br />
                                <h1 className="question-head">MCQ Questions</h1>
                                <TextField className="textfield-question" color="primary" variant="filled"
                                    focused
                                    required
                                    id="outlined-required"
                                    label="Question"
                                    placeholder="Enter Your Question"
                                />

                                <TextField className="textfield-question" color="primary" variant="filled"
                                    required
                                    focused
                                    id="add-option"
                                    label="Options"
                                    placeholder="Enter Your Option"
                                    style={{ width: '80%' }}
                                />

                                <Button startIcon={<AddCircleIcon />} style={{ height: '70px' }} />
                                <Button startIcon={<DownloadDoneIcon />} style={{ height: '70px' }} />
                                <Button className="textfield-question" color="success" variant="outlined" startIcon={<AddCircleIcon />} onClick={addMCQQuestion}>
                                    Add MCQ Question
                                </Button>
                                <Button className="textfield-question" color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={removeMCQQuestion}>
                                    Delete
                                </Button>
                                <br /><br />
                            </div>
                        ))}
                    </div>
                </div>

                <div>

                </div>

                <div className="create-button-div">
                    <Button id="add-question-btn" disabled={isButtonDisabled} variant="outlined" startIcon={<AddIcon />} onClick={() => { return (setShow(true)) }}>
                        Quiz Type
                    </Button>
                    <Button variant="outlined" startIcon={<SaveIcon />} onClick={()=>{dispatch(savequiz(title));dispatch(savequiz(description));}}>

                        Save Quiz
                    </Button>
                    {select}
                </div>
            </div>
        </div> : null}
    </div>
    )
}
