const initialState = {
    user: {
        authenticated: true,
        uid: 'xxx',
        errorMessage: null
    },
    categories: [
        'Web App',
        'Mobile App',
        'Native App'        
    ],
    ideas: [
        {
            value: 'Create a recipe app',
            categoryId: 1
        },
        {
            value: 'Create an app that takes photos of ingredients and lists any harmful additives',
            categoryId: 1
        },
        {
            value: 'Create an idea app',
            categoryId: 0
        },
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
