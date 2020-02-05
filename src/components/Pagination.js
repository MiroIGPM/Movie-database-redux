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
        const total = 344
        const currentPage = this.props.page
        const pageLinks = []
        
            for(let i=currentPage + 1; i<=currentPage + 4; i++){
                let active = currentPage == i ? 'active' : '';
                pageLinks.push(<li onClick={this.getPageNumber} className={`pagination__number ${active}`} key={i}>{i}</li>)
            }        
        return (
            <div>                
                <nav className="pagination is-centered is-mobile" role="navigation" aria-label="pagination">
                    <ul className="pagination__list">
                        <li className="pagination__number" onClick={this.getPageNumber}>1</li>
                        <li><span className="pagination__ellipsis">&hellip;</span></li> 
                        {pageLinks}   
                        <li><span className="pagination__ellipsis">&hellip;</span></li>
                        <li className="pagination__number" onClick={this.getPageNumber}>{total}</li>
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