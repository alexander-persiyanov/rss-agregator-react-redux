import React, { Component } from "react";
import List from "../Components/ListComponent/ListComponent";
import Posts from "../Components/PostsComponent/PostsComponent";
import Filter from "../Components/FilterComponent/FilterComponent";
import LoadingSpinner from '../Components/Commons/LoadingSpinnerComponent/LoadingSpinnerComponent';
import { getData} from "../Redux_store/actions/actions";

import { connect } from "react-redux";

// let  mapStateToProps = (state)=>{
//   return {
//     articles: state.remoteArticles
//   };
// }

// let mapDispatchToProps = (dispatch) =>{
//   return {
//     getData:()=>{dispatch(getData() )},
    
    
//   }
// }

class HomeView extends Component {

  constructor(props){
    super(props);
    this.data = {
      
      
    };
  }

  componentDidMount() {
   
  
  }
  
  
    render() {
    return (
      <div className="home-view">
        <LoadingSpinner isLoading={this.props.isLoading}></LoadingSpinner>
       <Filter></Filter>
       <List></List>
       <Posts articles={this.props.articles}></Posts>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.filteredArticles,
  isLoading:state.isLoading,
});
export default connect(mapStateToProps)(HomeView);
//export default HomeView;