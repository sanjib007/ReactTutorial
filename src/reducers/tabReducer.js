import {ACTION_TYPE} from '../action/tabAct'

export const initiateStore = {
    tabList : null
}

export const tagData = (store = initiateStore, action) => {
    switch (action.type) {
        case ACTION_TYPE.FATCH_ALL:
            return {
                ...store,
                tabList : [action.payload]
            }    
        default:
            return store;
    }
}