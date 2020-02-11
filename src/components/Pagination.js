import React, { Component } from 'react'
import {changePage, fetchItems} from "../reducers/actions"
import { connect } from 'react-redux';

class Pagination extends Component {

    componentDidMount(){  
        this.props.fetchItems(this.props.page);        
    }

    getPageNumber = e =>{
        this.props.changePage(e.target.textContent)
    }

    componentDidUpdate(){
        this.props.fetchItems(this.props.page)
    }

    render() {
        const total = 20
        const currentPage = this.props.page
            
        return (
            <div>                
                <nav className="pagination is-centered is-mobile" role="navigation" aria-label="pagination">
                    <ul className="pagination__list">
                        {currentPage > 1 ? <li className="pagination__number" onClick={() => this.props.changePage(currentPage - 1)}>-</li> : ""}
                        { currentPage > 2 ? <li className="pagination__number pagination__number--none" onClick={this.getPageNumber}>{currentPage - 2}</li> : ""}
                        {currentPage > 1 ? <li className="pagination__number pagination__number--none" onClick={this.getPageNumber}>{currentPage - 1}</li> : ""}
                        <li className="pagination__number pagination__number--active" onClick={this.getPageNumber}>{currentPage}</li>
                        {currentPage === total ? "" : <li className="pagination__number pagination__number--none" onClick={this.getPageNumber}>{currentPage + 1}</li>}
                        { currentPage === total - 1  || currentPage === total ? "" : <li className="pagination__number pagination__number--none" onClick={this.getPageNumber}>{currentPage + 2}</li>}
                        {currentPage !== total ? <li className="pagination__number" onClick={() => this.props.changePage(currentPage + 1)}>+</li> : "" }
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    page: state.posts.page
})

export default connect(mapStateToProps, { changePage, fetchItems })(Pagination);