import React, { Component } from 'react'

 class Moviecard extends Component {
    // Creating data and puting API data into the state
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=de9d1a4d941ba120c64cd7c510e686b2&language=en-US&page=1') 
        .then(res => res.json())
        .then(data => this.setState({posts: data.results}))  // data into posts empty array
    }

    render() {
        // creating const with title data and relase year from fetch API
        const postItems = this.state.posts.map(post =>(
            <div className="card" key={post.id}>
                <img src={`http://image.tmdb.org/t/p/w185//${post.poster_path}`}></img>
                <p>{post.original_title}</p>
                <p>{post.release_date}</p>
            </div>
        ));
       
        return (
            <div>
                <h1>Movies-card view</h1>
                <div className="container">    
                    <div className="cardsHolder">
                        
                            {postItems}
                            
                    </div>
                </div>    
            </div>
        )
    }
}

export default Moviecard;