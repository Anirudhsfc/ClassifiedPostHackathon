
const defaultState = {};

export default (state=defaultState, actions) => {
    console.log('called in')
    switch(actions.type){
        case 'ADD_POSITION':
            console.log(actions.position)
            console.log('woof')
            return actions.position
        default:
            return state
    }
}