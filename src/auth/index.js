import Firebase from '../firebase';

export default class Auth {
    static getUserAuth(action) {
        return new Promise(resolve => {
            Firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    resolve(user);
                }
                else {
                    resolve(false);
                }
            });
        });
    }

    static signUpUser(action) {
        return new Promise(resolve => {
            Firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
                .then((user) => {
                    resolve(user);
                })
                .catch(error => {
                    resolve(error);
                });
        });
    }

    static signInUser(action) {
        return new Promise(resolve => {
            Firebase.auth().signInWithEmailAndPassword(action.email, action.password)
                .then((user) => {
                    resolve(user);
                })
                .catch(error => {
                    resolve(error);
                });
        });
    }
}