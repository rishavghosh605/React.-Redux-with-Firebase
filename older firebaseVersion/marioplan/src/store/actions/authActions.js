export const signIn = (credentials) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({ type: 'LOGIN_ERROR',err })
        });
    }
}

export const signOut = () => {
    //We use getFirebase as a parameter as we use firebase to log out
    return (dispatch,getState, {getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) =>{
    return (dispatch,getState,{ getFirebase, getFirestore })=>{
        //The auth service of fireebase store the details like email, uid, photo,dispalyName of the user
        //But we store additional details of the user in the firestore under the users collection
        const firebase = getFirebase();
        const firestore =  getFirestore();
        //We use doc() instead of add() as we specify the primary key
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) =>{
            console.log("Reached");
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch((err) =>{
            dispatch({type:'SIGNUP_ERROR',err})
        })
    }
}