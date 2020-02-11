const initialState = {
    items: [],
    item: {},
    page: 1
}

// function evaluates the type 
export default function(state = initialState, action){
     switch(action.type){
         case "FETCH_SUCCES":
             return {...state, items: action.payload}
         case "FETCH_FAILURE":
             return {...state, error:action.payload.error}
        case "CHANGE_PAGE":
             return {...state, page: action.payload }    
        case "GET_MOVIE":
            return {...state, item: action.payload}         
        case "SORT":
            return{...state, items: action.payload}        
         default: 
            return state
     }
}


