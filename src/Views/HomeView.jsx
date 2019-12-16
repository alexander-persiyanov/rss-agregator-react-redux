import React, { Component } from "react";
import List from "../Components/ListComponent/ListComponent";
import Post from "../Components/PostsComponent/PostsComponent";
import Filter from "../Components/FilterComponent/FilterComponent";

// import { connect } from "react-redux";


class HomeView extends Component {
  
  
    render() {
    return (
      <div className="home-view">
        
       <Filter></Filter>
       <List></List>
       <Post></Post>

      </div>
    );
  }
}

// const mapStateToProps = ({ ui }) => ({
//   ui
// });

// export default connect(mapStateToProps,{ HomeViewSwitch })(HomeView);
export default HomeView;