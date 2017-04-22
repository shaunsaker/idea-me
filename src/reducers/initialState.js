const initialState = {
    user: {
        authenticated: null,
        uid: null,
        errorMessage: null,
        signInRedirect: null,
        email: null,
        password: null,
        apiSuccess: null
    },
    categories: [
      
    ],
    ideas: [
        
    ],
    newIdea: {
        value: null,
        categoryId: null
    },
    newCategory: {
        value: null,
    },  
    editIdea: {
        value: null,
        categoryId: null,
        index: null,
    }
}

export default initialState;
