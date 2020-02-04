import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Pages from './Pages';
import Pagination from './Pagination'

class Moviecard extends Component {

    render() {


        const {poster}=this.props;            
        const postItems = this.props.items.map(post =>(
            <div className={poster? "card" : "table__row"} key={post.id} id={post.id}>
                {(poster && post.poster_path) && <img className="card__img" src={`http://image.tmdb.org/t/p/w342//${post.poster_path}`} alt="Movie poster"></img>}
                <p className={poster? "card__text" : "table__text"}>{post.title}</p>
                <p className={poster? "card__text" : "table__text"}>{post.release_date}</p>
                {(poster) && <div className="card__link">
                   <Link to={"/SingleMovie/" + post.id}>View Detalis</Link>
                </div>}
            </div>
        ));
       
        const totalPages = 344

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
                <Pagination pages={totalPages} currentPage={this.props.page}/>
            </React.Fragment>            
        );
    }
};

const mapStateToProps = state => {    
    return {
      items: state.posts.items,
      id: state.posts.id,
      page: state.posts.page
    };
  };
  
export default connect(mapStateToProps)(Moviecard);

