import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../reducers/actions";

 class Moviecard extends Component {
    // Creating data and puting API data into the state
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
        // console.log('props', this.props)
        // console.log('propsitems', this.props.items)

        // creating const with title data and relase year from fetch API
        const postItems = this.props.items.map(post =>(
            <div className={poster? "card" : "table__row"} key={post.id}>
                {(poster && post.poster_path) && <img src={`http://image.tmdb.org/t/p/w185//${post.poster_path}`} alt="Movie poster"></img>}
                <p>{post.original_title}</p>
                <p>{post.release_date}</p>
            </div>
        ));
       
        return (
            <div>
               
                <div className="container">    
                    <div className={poster? "cardsHolder" : "table"}>
                        
                            {postItems}
                            
                    </div>
                </div>    
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log('state', state)
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

