import React,{ useEffect }  from "react";
import { connect } from "react-redux";

import { getDatesFromPosts,filterPostsByDate } from "../../Redux_store/actions/actions";

import  "../FilterComponent/FilterComponent.scss";
import moment from 'moment';

function  FilterComponent(props) {


    useEffect(()=>{
       
      

       if(props.articles.length>0){
     
        props.getDatesFromPosts();
       }
           
        
    



    },[props.articles]);


    function makeOptionsList(){
      return  props.filterListDates.map((item,index)=>{
            return   <option value={item} key={index}>{moment(item).format('DD/MM/YYYY')}</option>;
               
       })

        
       
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
    articles: state.filteredArticles,
    filterListDates: state.filterListDates,
  };
}



const mapStateToDisptch = (dispatch)=>{
    return {
        getDatesFromPosts : ()=>{dispatch(getDatesFromPosts())}, 
        filterPostsByDate : (date)=>{dispatch(filterPostsByDate(date))}, 
    }
}

export default connect(
    mapStateToProps,
    mapStateToDisptch,
)(FilterComponent);