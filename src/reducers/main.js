import { reducerCall } from './index';
import initialState from './initialState';

// Import reducers here

export default function main(state = initialState, action) {
    return reducerCall(state, action, reducerClass);
}

/**
 * Reducer static class
 */
class reducerClass {

    // Example usage
    // static toggleLoading(new_state, action) {

    //     // toggles loading state
    //     new_state = toggleLoading(new_state, action);

    //     return new_state;
    // }
}
