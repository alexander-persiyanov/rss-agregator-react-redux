import React,{ useEffect, useState }  from "react";
import { connect } from "react-redux";

import { getDatesFromPosts,filterPostsByDate } from "../../Redux_store/actions/actions";

import  "../FilterComponent/FilterComponent.scss";
import moment from 'moment';

function  FilterComponent(props) {
    const [dates,setDates] = useState(null);

    useEffect(()=>{
       
      

       if(props.articles.length>0){
       
        //props.getDatesFromPosts();
        setDates(getDates());


       }
           
        
    



    },[props.articles]);


    function  getDates(){
        let list_dates = [];


        props.articles.forEach(function(item, i, arr) {
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
        });

        return list_dates;
    }


    function makeOptionsList(){
        if(dates){
            return  dates.map((item,index)=>{
                return   <option value={item} key={index}>{moment(item).format('DD/MM/YYYY')}</option>;
                    
            })

        }

     

        
       
    }

    function handleChange(event){
        let selectedValue = event.target.value;
        props.filterPostsByDate(selectedValue);
        // alert(selectedValue);


    }

    const optionsList = makeOptionsList();

    return (

        <div className="filter-container">
        <div> <button>previous day</button> </div>
        <div>
            <select name="" id="" onChange={handleChange} >
                <option value="all" key="all">all</option>
                {optionsList}
            </select> 
        </div>
        <div> <button> next day</button></div>
    
    </div>
    );
  
 }

let  mapStateToProps = (state)=>{
  return {
    articles: state.articles.remoteArticles,
    // filterListDates: state.filterListDates,
  };
}



const mapStateToDisptch = (dispatch)=>{
    return {
        // getDatesFromPosts : ()=>{dispatch(getDatesFromPosts())}, 
        filterPostsByDate : (date)=>{dispatch(filterPostsByDate(date))}, 
    }
}

export default connect(
    mapStateToProps,
    mapStateToDisptch,
)(FilterComponent);