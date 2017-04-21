import { reducerCall } from './index';
import initialState from './initialState';

export default function main(state = initialState, action) {
    return reducerCall(state, action, reducerClass);
}

class reducerClass {
    static UPDATE_USER_EMAIL(new_state, action) {
        new_state.user.email = action.value;
        new_state.user.errorMessage = null;
        return new_state;
    }

    static UPDATE_USER_PASSWORD(new_state, action) {
        new_state.user.password = action.value;
        new_state.user.errorMessage = null;
        return new_state;
    }

    static REDIRECT_USER_TO_SIGN_IN(new_state, action) {
        new_state.user.signInRedirect = true;
        return new_state;
    } 

    static SIGN_IN_USER(new_state, action) {
        new_state.user.authenticated = true;
        new_state.user.uid = action.uid;
        new_state.user.errorMessage = null;
        new_state.user.signInRedirect = false;

        return new_state;
    } 

    static USER_ERROR(new_state, action) {
        new_state.user.errorMessage = action.message;
        return new_state;
    }

    static RESET_USER_ERROR(new_state, action) {
        new_state.user.errorMessage = null;
        return new_state;
    }

    static UPDATE_NEW_IDEA_VALUE(new_state, action) {
        new_state.newIdea.value = action.value;
        new_state.user.errorMessage = null;
        return new_state;
    }

    static UPDATE_NEW_IDEA_CATEGORY(new_state, action) {
        new_state.newIdea.categoryId = action.value;
        return new_state;
    }

    static UPDATE_EDIT_IDEA_VALUE(new_state, action) {
        new_state.editIdea.value = action.value;
        return new_state;
    }

    static UPDATE_EDIT_IDEA_CATEGORY(new_state, action) {
        new_state.editIdea.categoryId = action.value;
        return new_state;
    }

    static SET_EDIT_IDEA_INDEX(new_state, action) {
        new_state.editIdea.index = action.index;
        return new_state;
    }

    static UPDATE_NEW_CATEGORY_VALUE(new_state, action) {
        new_state.newCategory.value = action.value;
        return new_state;
    }

    static ADD_NEW_IDEA(new_state) {
        new_state.ideas.unshift(new_state.newIdea);
        new_state.newIdea = {
            value: null,
            categoryId: null
        }
        return new_state;
    }

    static DELETE_IDEA(new_state, action) {
        new_state.ideas.splice(action.index, 1);      
        return new_state;
    }
    static ADD_NEW_CATEGORY(new_state) {
        new_state.categories.push(new_state.newCategory.value);
        new_state.newCategory = {
            value: null,
        }
        return new_state;
    }

    static DELETE_CATEGORY(new_state, action) {
        new_state.categories.splice(action.index, 1);

        // update ideas categoryIds
            // set all matching categoryIds to null
            // all categoryIds above index should be decreased by 1
        const ideas = new_state.ideas;
        ideas.map((value, index) => {
            if (value.categoryId === action.index) {
                value.categoryId = null;
            }
            else if (value.categoryId > action.index) {
                value.categoryId--;
            }
        });
        

        return new_state;
    }

    static UPDATE_IDEA(new_state) {

        for (let i = 0; i < new_state.ideas.length; i++) {
            if (i === new_state.editIdea.index) {
                new_state.ideas[i].value = new_state.editIdea.value;
                new_state.ideas[i].categoryId = new_state.editIdea.categoryId;
                break;
            }
        }

        return new_state;
    }
}
