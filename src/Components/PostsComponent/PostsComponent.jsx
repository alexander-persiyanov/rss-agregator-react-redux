import React, { Component } from "react";
import { connect } from "react-redux";
import { getData,changeReadState,setReadState } from "../../Redux_store/actions/actions";
import PostItem from "./PostItemComponent/PostItemComponent";
import  "./PostsComponent.scss";

export class Posts extends Component {
  constructor(props){
    super(props);
    this.data = {
      
      
    };
  }


    componentDidMount() {
     
      this.props.getData();

      if(this.props.articles.length>0){
        console.log(this.props.articles);

      }else{
        console.log("loading");
      }
     
    }

    postActive(id){
      // this.props.changeReadState(id);
     
       //alert("active:"+' '+id);
      this.props.setReadState(id);
    }



    render() {
      const itemsPost =  this.props.articles.map((el,index) =>{
          
        return (
          <PostItem item={el} key={index} action={(id)=>{this.postActive(id)}} ></PostItem>
           
        );
       } );

      return (

       <div className="posts-list">
         
          {itemsPost}
       
       </div>
       
      );
    }
  }

  let  mapStateToProps = (state)=>{
    return {
      articles: state.filteredArticles
    };
  }

  // let  mapDispatchToProps = {
  //     getData:getData,
  //     changeReadState:changeReadState
    
  // }

  let mapDispatchToProps = (dispatch) =>{
    return {
      getData:()=>{dispatch(getData() )},
      setReadState:(id)=>{ dispatch(setReadState(id)); },
      
    }
 }

  
  
  export default connect(
    // mapStateToProps,
     null,
    mapDispatchToProps
  )(Posts);