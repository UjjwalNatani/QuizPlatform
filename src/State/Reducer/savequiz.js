const initialState='';

const addQuiz=(state=initialState, action)=>{
    switch(action.type){
        case "SaveQuiz": return action.payload;
        default: return state;
    }
}

export default addQuiz;