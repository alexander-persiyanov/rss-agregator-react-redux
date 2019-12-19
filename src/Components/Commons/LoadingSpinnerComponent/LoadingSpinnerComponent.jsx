import React  from "react";


import  "../LoadingSpinnerComponent/LoadingSpinnerComponent.scss";


let  loadingSpinner = (props) =>{
   
    return (

        <div className={"loading-spinner-container"+" "+(props.isLoading?"visible":"")}>
         
           <div className="spinner">  <img src="/images/loader.gif" alt=""/>Add</div> 
        </div>
    );
  
 }


export default loadingSpinner ;