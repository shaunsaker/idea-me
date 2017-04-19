import { reducerCall } from './index';
import initialState from './initialState';

export default function main(state = initialState, action) {
    return reducerCall(state, action, reducerClass);
}

class reducerClass {

    static UPDATE_NEW_IDEA_VALUE(new_state, action) {
        new_state.newIdea.value = action.value;
        return new_state;
    }

    static UPDATE_NEW_IDEA_CATEGORY(new_state, action) {
        new_state.newIdea.category = action.value;
        new_state.newIdea.categoryId = action.id;
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
}
