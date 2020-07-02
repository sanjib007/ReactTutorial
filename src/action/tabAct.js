import api from './api'


export const ACTION_TYPE = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FATCH_ALL : 'FATCH_ALL'
}


export const fatchAll = () => dispatch =>{
    api.tag().fatchAll()
    .then((res)=>{
        console.log('tag action fatch all function call success', res);
        dispatch({
            type: ACTION_TYPE.FATCH_ALL,
            payload: []
        })
    })
    .catch((err)=>{
        console.log('tag action fatch all function call error', err);
    });
    
}


// export const create = data => {
//     return {
//         type:'create',
//         payload: data
//     }
// }