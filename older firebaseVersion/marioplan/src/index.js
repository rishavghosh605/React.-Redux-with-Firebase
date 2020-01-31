import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
//We use attachAuthIsready argument to use a function in the store connected with the firebase,
//store.firebaseAuthIsReady is the function that checks if firebase has checked the authentication status of the site
//Since if we do not go through this procedure then there will a flicker in the navbar where it will show the signedoutLink before the signedIn link as
//the server will take a moment to get confirmation from firebase
//thus here we first get confirmation then we render
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile: true,userProfile:'users',attachAuthIsReady: true}), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);
//We add useFirestoreForProfile as we command firebase reducer to use the firestore to get the current logged in person profile in the table users as
//firebase.auth.profile
store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  registerServiceWorker();
})
