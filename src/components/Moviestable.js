// import React, { Component } from 'react'

//  class Moviestable extends Component {
//     // Creating data and puting API data into the state
//     constructor(props){
//         super(props);
//         this.state = {
//             posts: []
//         }
//     }

//     componentDidMount(){
//         fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=de9d1a4d941ba120c64cd7c510e686b2&language=en-US&page=1') 
//         .then(res => res.json())
//         .then(data => this.setState({posts: data.results}))  // data into posts empty array
//     }

//     render() {
//         // creating const with title data and relase year from fetch API
//         const postItems = this.state.posts.map(post =>(
//             <div className="table__row" key={post.id}>
//                 <p>{post.original_title}</p>
//                 <p>{post.release_date}</p>
//             </div>
//         ));
       
//         return (
//             <div>
//                 <h1>Movies-table view</h1>
//                 <div className="container">
//                     <div className="table">
//                         {postItems}
//                     </div>    
//                 </div>    
//             </div>
//         )
//     }
// }

// export default Moviestable;