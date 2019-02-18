export const experienceAdd = (experienceObject) =>{
    return {
        type: 'ADD_EXPERIENCE',
        experienceObject: experienceObject
    }
}


export const educationAdd = (educationObject) => {
    return{
        type: 'ADD_EDUCATION',
        educationObject: educationObject
    }
}


export const positionAdd = (position) => {
 
    return{
        type: 'ADD_POSITION',
        position: position
    }
}