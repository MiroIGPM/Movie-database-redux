import React, { Component } from 'react'
import {changePage, fetchItems} from "../reducers/actions"
import { connect } from 'react-redux';


 class Pages extends Component {
    

     getPageNumber = e =>{
         console.log(e.target.textContent)
        this.props.changePage(e.target.textContent)
        this.fetchPage()  
    }

    fetchPage = () =>{
        this.props.fetchItems(this.props.page);
    }
    render() {
            

        return (
            <div className="container">
                <ul className="pagination">
                    <li className="pagination__number" onClick={this.getPageNumber}>1</li>
                    <li className="pagination__number" onClick={this.getPageNumber}>2</li>
                    <li className="pagination__number" onClick={this.getPageNumber}>3</li>
                    <li className="pagination__number" onClick={this.getPageNumber}>4</li>
                    <li className="pagination__number" onClick={this.getPageNumber}>5</li>
                </ul>
            </div>
        )
    }
}

    const mapStateToProps = state => ({
        page: state.posts.page
    })

export default connect(mapStateToProps, {changePage, fetchItems})(Pages);