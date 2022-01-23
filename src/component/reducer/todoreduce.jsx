const initState = {
    todo:[
        {
            id:1,
            title:"viec 1",
            completed:false,
        },
        {
            id:2,
            title:"viec 1",
            completed:false,
        },
        {
            id:3,
            title:"viec 1",
            completed:false,
        }
    ]
}

const todoReducer = (state = initState,action) =>{
    switch(action.type){
        case "MAX_COM":          
            return {
            ...state,
            todo: state.todo.map(to =>{
                if(to.id == action.payload) to.completed = !to.completed;
                
                return to
            }) 
            }
          default:
              return state  
    }
}
  export default todoReducer
                       
    
