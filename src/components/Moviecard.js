import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import SortButton from './SortButton';


class Moviecard extends Component {
   

    render() {
        const {poster}=this.props;   
        
                
        const postItems = this.props.items.map(post =>(
                <div className={poster? "card" : "table__row"} key={post.id} id={post.id}>                
                    {(poster && post.poster_path) && <img className="card__img" src={`http://image.tmdb.org/t/p/w342//${post.poster_path}`} alt="Movie poster"></img>}                 
                    <p className={poster? "card__text" : "table__text table__text--left"}>{post.title}</p>
                    <p className={poster? "card__text" : "table__text table__text--center"}>{post.release_date}</p>
                    <p className={poster? "card__text" : "table__text table__text--right"}>Rating: {post.vote_average}</p>
                    {(poster) && <div className="card__link">
                    <Link to={"/SingleMovie/" + post.id}>View Detalis</Link>
                    </div>}
                </div>            
        ));

        return (
            <React.Fragment>    
                <div className="main">                    
                    <SortButton />
                    <div className="contain">    
                        <div className={poster? "cardsHolder" : "table"}>
                                {(!poster) && <div className="table__row">                                 
                                                    <p className= "table__text table__text--big table__text--left">Title</p>
                                                    <p className="table__text table__text--big table__text--center">Release date</p>
                                                    <p className="table__text table__text--big table__text--right">Rating </p>
                                                </div>}                            
                                {postItems}                                
                        </div>
                    </div>
                </div>
                <Pagination />      
            </React.Fragment>            
        );
    }
};

const mapStateToProps = state => {    
    return {
      items: state.posts.items,
      id: state.posts.id,
      page: state.posts.page,
      order: state.posts.order
    };
  };
  
export default connect(mapStateToProps)(Moviecard);

