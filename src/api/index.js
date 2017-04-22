import Firebase from '../firebase';

const response = {
    success: null,
    message: null,
}

export default class ApiData {
    static saveUserData(action) {
        let uid = action.uid;

        // If we did not receive the uid via props, get the uid from Firebase
        if (!uid) {
            uid = Firebase.auth().currentUser.uid;
        }
        
        const userData = action.ideas;

        return new Promise(resolve => { 
            Firebase.database().ref(uid).update({
                ideas: userData
            })
            .then(() => {
                response.success = true;
                resolve(response);
            })
            .catch(error => {
                response.message = error.message;
                resolve(response);
            });
        });
    }

    static loadUserData(action) {
        // let uid = action.uid;

        // // If we did not receive the uid via props, get the uid from Firebase
        // if (!uid) {
        //     uid = Firebase.auth().currentUser.uid;
        // }

        // let userData;

        // return new Promise(resolve => { 
        //     Firebase.database().ref(uid).on('value', snapshot => {
        //         response.success = true;
        //         response.message = snapshot.val();
        //         resolve(response);
        //     }, (error) => {
        //         response.message = error.message;
        //         resolve(response);
        //     });
        // });
    }
}