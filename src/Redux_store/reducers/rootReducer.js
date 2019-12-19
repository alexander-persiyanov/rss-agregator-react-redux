import {CHANGE_READ_STATE,GET_DATES_FROM_POSTS,FILTER_POSTS_BY_DATE} from "../actions/action-type";
import  cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';

const GET_RSS = "GET_RSS";

const initialState = {
  list: [
    {id:1, title:"first article"},
    {id:2, title:"second article"}
  ],
  remoteArticles: [],
  filteredArticles:[],
  filterListDates:[],
  isLoading:false,
};

function rootReducer(state = initialState, action) {
 

  if (action.type === GET_RSS) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });

  }
  
  if (action.type === "DATA_LOADED") {
    
      let newRemoteArticles = state.remoteArticles.concat(action.payload);
      newRemoteArticles.sort(function(item1,item2){
       
        return   moment(item2.pubDate._text) - moment(item1.pubDate._text);
      });

      let s = Object.assign({}, state, {
      remoteArticles: newRemoteArticles,
      filteredArticles: newRemoteArticles,

    });

    
    console.dir(s.remoteArticles);
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
  if (action.type === GET_DATES_FROM_POSTS){

    // var dateToCompare = moment("Sun, 15 Dec 2019 12:10:59 +0100");
    // var today = moment("Sun, 15 Dec 2020 12:10:59 +0100");

    // console.log(dateToCompare.startOf('day').isSame(today.startOf('day')));

    let list_dates = [];


    state.remoteArticles.forEach(function(item, i, arr) {
      let pubDate = item.pubDate._text; 
   
      if(list_dates.length>0){

        for(let j=0; j<=list_dates.length-1;j++){

          if( moment(list_dates[j]).startOf('day').isSame( moment(pubDate).startOf('day'))) {
            pubDate = null;
            break; 
          }

        }

        if(pubDate!=null){
          list_dates.push(pubDate);
        }
       
      }else{
        list_dates.push(pubDate);
      }
      
     

    });

    list_dates.sort(function(a,b){
      return moment(a) - moment(b);
    })
    
    // console.dir(list_dates);

    
    return Object.assign({}, state, {
      filterListDates: list_dates,
      

    });
     
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

 if(action.type === "TOGGLE_LOADER_SPINNER"){
  
  return Object.assign({}, cloneDeep(state), {
    isLoading: action.isLoading
  }
  );


 }

 if(action.type === "ADD_LIST_ITEM"){
   let data = action.data;
   let lastId = state.list.length;
   return Object.assign({}, cloneDeep(state), {
    list: state.list.concat({id:lastId+1,title:action.data}) 
  }
  );
 }
  
  
  return state;
}

export default rootReducer;