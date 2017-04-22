import Firebase from '../firebase';

const response = {
    authenticated: null,
    message: null
};

export default class Auth {
    static getUserAuth() {
        return new Promise(resolve => {
            Firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    response.authenticated = true;
                    response.message = user;
                    resolve(response);
                }
                else {
                    resolve(response);
                }
            });
        });
    }

    static signUpUser(action) {
        return new Promise(resolve => {
            Firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
                .then((user) => { 
                    response.authenticated = true;
                    response.message = user;
                    resolve(response);
                })
                .catch(error => {
                    response.message = error;
                    resolve(response);
                });
        });
    }

    static signInUser(action) {
        return new Promise(resolve => {
            Firebase.auth().signInWithEmailAndPassword(action.email, action.password)
                .then((user) => { 
                    response.authenticated = true;
                    response.message = user;
                    resolve(response);
                })
                .catch(error => {
                    response.message = error;
                    resolve(response);
                });
        });
    }
}