const initialState = {
    user: {
        authenticated: null,
        uid: null,
        errorMessage: null,
        signInRedirect: null,
        email: null,
        password: null,
        apiSaveSuccess: null,
        apiLoadSuccess: null,
    },
    categories: [
      
    ],
    ideas: [
        
    ],
    newIdea: {
        title: null,
        description: null,
        categoryId: null
    },
    newCategory: {
        value: null,
    },  
    editIdea: {
        title: null,
        description: null,
        categoryId: null,
        index: null,
    }
}

export default initialState;
