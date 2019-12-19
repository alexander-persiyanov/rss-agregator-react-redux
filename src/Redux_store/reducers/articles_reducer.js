import  cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';


const GET_RSS = "GET_RSS";
const DATA_LOADED = "DATA_LOADED";
const CHANGE_READ_STATE = "CHANGE_READ_STATE";
const TOGGLE_LOADER_SPINNER = "TOGGLE_LOADER_SPINNER";
const FILTER_POSTS_BY_DATE = "FILTER_POSTS_BY_DATE";



const initialState = {
 
    remoteArticles: [],
    filteredArticles:[],
    isLoading:false,
};

export default function ArticlesReducer ( state = initialState , action){

    if (action.type === GET_RSS) {
        return Object.assign({}, state, {
          articles: state.articles.concat(action.payload)
        });
    
      }
      
      if (action.type === DATA_LOADED) {
         
          let newRemoteArticles = state.remoteArticles.concat(action.payload);
         
          newRemoteArticles.sort(function(item1,item2){
           
            return   moment(item2.pubDate._text) - moment(item1.pubDate._text);
          });
          
      
          
          let s = Object.assign({}, state, {
          remoteArticles: newRemoteArticles,
          filteredArticles: newRemoteArticles,
    
        });
        // console.dir(s);
    
        
        // console.dir(s.remoteArticles);
        return s;
      }
    
      if(action.type === CHANGE_READ_STATE){
        // action.id_post;
        //alert(action.id_post);
        let cloneRemoteArticles  =  cloneDeep(state.remoteArticles);
        let cloneFilteredArticles  =  cloneDeep(state.filteredArticles);
    
         console.dir(cloneRemoteArticles);
    
        cloneRemoteArticles.forEach(item => {
          if(item.guid._text === action.id_post){
            item.readed = !item.readed;
            //cambio sia nel RemoteArticles sia nel FilteredArticles
            let obj = cloneFilteredArticles.find(item => item.guid._text === action.id_post);
            
            obj.readed = !obj.readed;
    
            
    
          }
        });
        
    
    
        return Object.assign({}, state, {
          remoteArticles: cloneRemoteArticles,
          filteredArticles : cloneFilteredArticles ,
        }
        );
    
        
    
      }
     
    
    
    
     if(action.type === TOGGLE_LOADER_SPINNER){
      
      return Object.assign({}, cloneDeep(state), {
        isLoading: action.isLoading
      }
      );
    
    
     }

     if ( action.type === FILTER_POSTS_BY_DATE){
  
        let date =  action.payload;
        let filteredArticles;
        if(date!="all"){
          
          filteredArticles = state.remoteArticles.filter(
            function(article){
              
              return  moment(article.pubDate._text).startOf('day').isSame( moment(date).startOf('day'))  ;
      
            }
          );
    
        }else{
          
          filteredArticles =  cloneDeep(state.remoteArticles);
    
        }
        
       
    
        return Object.assign({}, state, {
          filteredArticles: filteredArticles
        }
        );
    
      } 
     

     

    return state;

} 