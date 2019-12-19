import  cloneDeep from 'lodash/cloneDeep';


const ADD_LIST_ITEM = "ADD_LIST_ITEM";

const initialState = {
    list: [
        {id:1, title:"first article"},
        {id:2, title:"second article"}
    ],

};

export default function ListReducer ( state = initialState , action){

    if(action.type === ADD_LIST_ITEM){
       
        let lastId = state.list.length;
        return Object.assign({}, cloneDeep(state), {
            list: state.list.concat({id:lastId+1,title:action.data}) 
        });
    }

    return state;

} 