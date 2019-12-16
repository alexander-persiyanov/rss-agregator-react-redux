import React, { Component } from "react";
import { connect } from "react-redux";
import  "./PostItemComponent.scss";
import { getData } from "../../../Redux_store/actions/actions";
import moment from "moment";

export class PostItem extends Component {
    constructor(){
        super();
    }

    componentDidMount() {
     
     
    }


    actionClickHandle(idItem){
      this.props.action(idItem);
    }


    render() {
      return (
        
        <div className={"post-item"+ " "+ (this.props.item.readed?"readed":"")} onClick={()=>{this.actionClickHandle(this.props.item.guid._text)}}>
           
            <div key={this.props.index} >
                <div> <span className="label"> id: </span>{this.props.item.id}  </div>
                <div> <span className="label"> title: </span>{this.props.item.title._text}  </div>
                
                <div > <span className="label">description</span> 
                    <div dangerouslySetInnerHTML={{__html: this.props.item.description._text}} />
                </div>
                <br/>
                <div> <span className="label"> author: </span> {this.props.item.author._text} </div>
                <div> <span className="label"> category: </span> {this.props.item.category._text} </div>
                <div> <span className="label"> date of published: </span> {moment(this.props.item.pubDate._text).format("DD/MM/YYYY")} time: {moment(this.props.item.pubDate._text).format("HH:mm")} </div>
                <br/>
                <div> <span className="label"> state post: </span> {this.props.item.readed ? "yet readed":"new post"} </div>
               
            </div>  
                
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      
    };
  }
  
  
  export default connect(
    mapStateToProps,
    { getData }
  )(PostItem);