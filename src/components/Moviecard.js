import React, { Component } from 'react';
import { connect } from "react-redux";
// import * as actions from "../reducers/actions";
import {changeId} from "../reducers/actions";

import { Link } from 'react-router-dom';


import Pages from './Pages';


 class Moviecard extends Component {
    
  getId = e =>{
    this.props.changeId(e.target.parentNode.getAttribute("id"))
    console.log(e.target.parentNode.parentNode.getAttribute("id"))
}

    render() {
        const {poster}=this.props;
      

       
        const postItems = this.props.items.map(post =>(
            <div className={poster? "card" : "table__row"} key={post.id} id={post.id}>
                {(poster && post.poster_path) && <img className="card__img" src={`http://image.tmdb.org/t/p/w342//${post.poster_path}`} alt="Movie poster"></img>}
                <p className={poster? "card__text" : "table__text"}>{post.title}</p>
                <p className={poster? "card__text" : "table__text"}>{post.release_date}</p>
                {(poster) && <div onClick={this.getId} className="card__link">
                   <Link  to="/SingleMovie">View Detalis</Link>
                </div>}
            </div>
        ));
       
        return (
            <React.Fragment>    
                <div className="main">
                
                    <div className="container">    
                        <div className={poster? "cardsHolder" : "table"}>
                            
                                {postItems}
                                
                        </div>
                    </div>

                </div>

                <Pages />
            </React.Fragment>
                
            
        );
    }
};


const mapStateToProps = state => {
    
    return {
      items: state.posts.items,
    };
  };
  
 
  
  export default connect(mapStateToProps, {changeId} )(Moviecard);

