const initialState = {
    user: {
        authenticated: true,
        uid: 'xxx'
    },
    categories: [
        'Web App',
        'Mobile App',
        'Native App'        
    ],
    ideas: [
        {
            idea: 'Create a recipe app',
            categoryId: 1
        },
        {
            idea: 'Create an app that takes photos of ingredients and lists any harmful additives',
            categoryId: 1
        },
        {
            idea: 'Create an idea app',
            categoryId: 0
        },
    ]
}

export default initialState;
