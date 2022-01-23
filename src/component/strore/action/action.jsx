export const compelet = (id)=>{
    const daydispatch = dispatch =>{
        dispatch({
            type:"MAX_COM",
            payload:id
        })
    }
    return daydispatch
}