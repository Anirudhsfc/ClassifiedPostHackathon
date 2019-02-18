
const defaultState = [];

export default (state=defaultState, actions) => {
    console.log('called')
    switch(actions.type){
        case 'ADD_EXPERIENCE':
            return [
                ...state,
                actions.experienceObject
            ]
        default:
            return defaultState
    }
}