import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../reducers/actions";


 class Moviecard extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){  
        this.props.fetchItems();
    }

    render() {
        const {poster}=this.props;
      

       
        const postItems = this.props.items.map(post =>(
            <div className={poster? "card" : "table__row"} key={post.id}>
                {(poster && post.poster_path) && <img className="card__img" src={`http://image.tmdb.org/t/p/w185//${post.poster_path}`} alt="Movie poster"></img>}
                <p className={poster? "card__text" : "table__text"}>{post.title}</p>
                <p className={poster? "card__text" : "table__text"}>{post.release_date}</p>
            </div>
        ));
       
        return (
            <div className="main">
               
                <div className="container">    
                    <div className={poster? "cardsHolder" : "table"}>
                        
                            {postItems}
                            
                    </div>
                </div>

            </div>
            
                
            
        );
    }
};


const mapStateToProps = state => {
    
    return {
      items: state.posts.items
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchItems: () => {
        dispatch(actions.fetchItems());
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Moviecard);

