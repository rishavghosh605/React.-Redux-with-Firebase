const initState = {
    projects:[
        {id: '1',title: 'love is a lie',content: 'lorem ipsumss'},
        {id: '2',title: 'apathy is crime',content: 'lorem ipsumss'},
        {id: '3',title: 'everyone should be more altruistic',content: 'lorem ipsumss'}    ]
}
const projectReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('creatd project',action.project);
            break;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err);
            break;
        default:
            console.log("Nothing happened",action.project);
    }
    return state;
}

export default projectReducer;