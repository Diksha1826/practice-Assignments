export const TODO_SUCESS = "TODO_SUCESS" ;
export const TODO_LODING = "TODO_LODING" ;
export const TODO_ERROR = "TODO_ERROR" ;

export const todosucess = (payload)=>({
    type: TODO_SUCESS ,
    payload
});

export const todoloding = ()=>({
    type: TODO_LODING 
});

export const todoerror = ()=>({
    type: TODO_ERROR 
});