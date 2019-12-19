import React ,{useRef} from "react";
import "./ListComponent.scss";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return { list: state.lists.list };
};
const mapStateToDispatch = (dispatch) => {

  return { 
    onAddListItem: (data) => { dispatch ({type:"ADD_LIST_ITEM",data }) } ,
  };
};

function ConnectedList (props) { 
//Distructorization obj
//let {new_articles} = props;

const inputRef = useRef(null);

function actionButton(){
  props.onAddListItem(inputRef.current.value);
  inputRef.current.value = "";
 
}
   
    return (
      <div className="list-container">
      <input type="text" ref={inputRef} /> 
      <button onClick={actionButton}>Add</button>
      <ul>
        {props.list.map(el => (
        <li key={el.id}>id:{el.id}__{el.title}</li>
        ))}
      </ul>
      </div>
    );
}

export default connect(mapStateToProps,mapStateToDispatch)(ConnectedList);