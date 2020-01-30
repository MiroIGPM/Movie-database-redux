import React, { Component } from 'react'
import { fetchItem } from "../reducers/actions"
import { connect } from 'react-redux'

 class SingleMovie extends Component {
    componentDidMount(){
        this.props.fetchItem(this.props.id)
    }

    render() {
        const postItem = this.props.item.original_title;
        
        return (
            <div>
                <h1>{postItem}</h1>
            </div>
        )
    }
}


const mapStateToProps = state => {
    
    return {
      item: state.posts.item,
      id: state.posts.id
    };
  };

export default connect( mapStateToProps, { fetchItem } )(SingleMovie);

