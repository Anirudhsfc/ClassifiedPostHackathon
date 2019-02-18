
const defaultState = [];

export default (state=defaultState, actions) => {
    console.log('called')
    switch(actions.type){
        case 'ADD_EDUCATION':
            return [
                ...state,
                actions.educationObject
            ]
        default:
            return defaultState
    }
}