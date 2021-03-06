import { ADD_ARTICLE,CHANGE_READ_STATE,GET_DATES_FROM_POSTS,FILTER_POSTS_BY_DATE } from "./action-type";
import convert from 'xml-js';
import uuidv1  from  'uuid/v1';




// ActionsCreators
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function toggleLoaderSpinner(isLoading) {
    return { type: "TOGGLE_LOADER_SPINNER", isLoading }
};





// ThunksCreators
export function getData() {
   
    return function(dispatch) {
        console.dir(dispatch);

        dispatch(toggleLoaderSpinner(true));

        
        return fetch("http://127.0.0.1:8080/https://www.repubblica.it/rss/homepage/rss2.0.xml")
        .then(response => {    
       
           
            return response.text() ; 
        
        } ).then(str => {
            let options =  {compact: true, ignoreComment: true, spaces: 4,ignoreAttributes:true,cdataKey:"_text" };
            let dataAsJson = JSON.parse(convert.xml2json(str,options));
            console.log(dataAsJson.rss.channel.item);
            return dataAsJson.rss.channel.item;
        })
        .then(arr => {
           
             arr.forEach(obj => {
               
                // obj["id"] = uuidv1();
                obj["readed"] = false;

                
            });
           

            return arr;
           
        })
        .then(arr => {
            dispatch({ type: "DATA_LOADED", payload: arr });
            dispatch(toggleLoaderSpinner(false));
        });
        
       
    };
}

export const setReadState=(id_post)=>{
    
    return { type: CHANGE_READ_STATE, id_post }
}

export function changeReadState(id_post) {
   
    return function (dispatch) {
       
        return dispatch ( setReadState(id_post) ) ;
    
    };
};

export function getDatesFromPosts() {
   
        return { type: GET_DATES_FROM_POSTS } ;
    
   
};

export function filterPostsByDate(date) {
   
    return { type: FILTER_POSTS_BY_DATE, payload: date } ;


};



