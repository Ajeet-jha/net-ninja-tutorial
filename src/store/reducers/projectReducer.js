const initialState  = {
    projects: [
        {id:'1', title: 'help me find peach', content: 'blah blah blah'},
        {id:'2', title: 'Hi there', content: 'blah blah blah'},
        {id:'3', title: 'come here', content: 'blah blah blah'},
        {id:'4', title: 'go there', content: 'blah blah blah'},
    ]
}

const projectReducer = (state=initialState, action) => {

    return state;
}

export default projectReducer;