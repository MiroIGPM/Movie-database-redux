
//items - movies that come from action  (fetch request is gonna be put in action)
//item - single movie that we put when we get a response
const initialState = {
    page: 1 
}



// function evaluates the type 
export default function(state = initialState, action){
     switch(action.type){       
         case "CHANGE_PAGE":
             return {...state, page:action.payload}       
         default: 
            return state
     }
}


export {initialState}