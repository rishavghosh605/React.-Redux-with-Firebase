import firebase from 'firebase/app'
export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase,getFirestore}) => {
        //make async call to database
        const firestore = firebase.firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Rishav',
            authorLastName: 'Ghosh',
            authorId: 12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project });
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
    }
};