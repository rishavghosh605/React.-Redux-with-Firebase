const functions = require('firebase-functions');
//Here we use the admin service to use the auth and firestore services of firebase
const admin =require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello riders!");
 });

//We create two functions one for new user joining and one for creation of new project
//We do this using cloud functions as notifications need not be calculated or rendered on the
//client side and it will be faster and more scalable if we use server side rendering using cloud functions

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc=>console.log('notification added',doc));
})

exports.projectCreated = functions.firestore
       .document('projects/{projectId}')
       .onCreate(doc =>{

        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
});

exports.userJoined =  functions.auth.user()
.onCreate(user=>{
    return admin.firestore()    .collection('users')
    .doc(user.uid).get().then(doc=>{
        const newUser=doc.data()
        const notification = {
            content: 'Joined the team!!',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})
