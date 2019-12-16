import React from "react";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return { new_articles: state.articles };
};

function ConnectedList ({new_articles}) { 
//Distructorization obj
//let {new_articles} = props;
   
    return (
  
      <ul>
        {new_articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
}

export default connect(mapStateToProps)(ConnectedList);