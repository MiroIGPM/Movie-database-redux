import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../reducers/actions'
import {Link} from 'react-router-dom'

 class SingleMovie extends Component {

    componentDidMount(){
        this.props.fetchItem(this.props.match.params.id)
    }

    render() {       
        const item = this.props.item
        
        return (
            <div>
                <div className="holder">
                    <div className="movie">
                        <div className="movie__image">
                            <img src={`http://image.tmdb.org/t/p/w342//${item.poster_path}`} alt="Movie poster"></img>
                        </div>
                        <div className="movie__description">
                            <h1 className="title">{this.props.item.title}</h1>
                            <h4 className="subtitle"><span>Original title:</span> {item.original_title}</h4>
                            <div className="table--wide table--left">
                                <p className="table__row table__row--left"><span className="movie__span">Overview:</span> {item.overview}</p>
                                <p className="table__row table__row--left"><span className="movie__span">Release date:</span> {item.release_date}</p>
                                <p className="table__row table__row--left"><span className="movie__span">Rating:</span> {item.vote_average}</p>
                            </div>
                            <div className="movie__misc">
                                <h4>Additional information </h4>
                                {item.budget > 0 ? <p>Budget: {item.budget} $</p> : "" }
                                {item.revenue > 0  ? <p>Revenue: {item.revenue} $</p> : "" }
                                <p>Runtime: {item.runtime} min</p>
                                <p>IMDB LINK: <a className="misc__link" href={`https://www.imdb.com/title/${item.imdb_id}`}>https://www.imdb.com/title/{item.imdb_id}</a></p>
                            </div>
                                <Link className="movie__link" to="/Moviecard">BACK</Link>                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
      item: state.posts.item,
    };
  };

export default connect( mapStateToProps, { fetchItem } )(SingleMovie);

