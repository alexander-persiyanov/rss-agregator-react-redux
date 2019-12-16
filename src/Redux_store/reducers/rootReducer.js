import {CHANGE_READ_STATE} from "../actions/action-type";
import  cloneDeep from 'lodash/cloneDeep';

const GET_RSS = "GET_RSS";

const initialState = {
  articles: [
    {id:1, title:"first article"},
    {id:2, title:"second article"}
  ],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
 

  if (action.type === GET_RSS) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });

  }
  
  if (action.type === "DATA_LOADED") {
      let v = Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
    console.dir(v.remoteArticles);
    return v;
  }

  if(action.type === CHANGE_READ_STATE){
    // action.id_post;
    //alert(action.id_post);
    let cloneRemoteArticles  =  cloneDeep(state.remoteArticles);
    
    cloneRemoteArticles.forEach(item => {
      if(item.guid._text === action.id_post){
        item.readed = !item.readed;
      }
    });
    


    return Object.assign({}, state, {
      remoteArticles: cloneRemoteArticles
    }
    );

    

  }
  

  
  return state;
}

export default rootReducer;