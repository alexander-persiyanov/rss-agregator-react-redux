import React from "react";
import { connect } from "react-redux";
import  "../FilterComponent/FilterComponent.scss";

const Toggle = ({ ui, toggleSwitch }) => (
  <div className="filter-container">
      <div> <button>previous day</button> </div>
      <div>
           <select name="" id="">
             <option value="">All</option>
             <option value="">1</option>
            </select> 
        </div>
      <div> <button> next day</button></div>
 
  </div>
);

const mapStateToProps = ({ ui }) => ({
  ui
});

export default connect(
  mapStateToProps,
  {  }
)(Toggle);