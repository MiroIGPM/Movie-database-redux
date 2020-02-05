import React from 'react'
import { Container } from "react-bulma-components";

const Pagination = (props) => {
    const pageLinks = []

    for(let i=props.currentPage + 1; i<= props.currentPage + 7; i++){
        let active = props.currentPage == i ? 'active' : '';
        pageLinks.push(<li className={`${active}`} key={i}><a className="pagination-link">{i}</a></li>)
    }

    // const prevPage = props.currentPage > 1 ? props.currentPage - 1 : "";
    // const nextPage = props.pages > props.currentPage ? props.currentPage + 1 : "";

    return(
    <Container className="columns is-mobile is-centered search-container">  
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            
            <ul class="pagination-list">
                 <li className="pagination-link">1</li>
                 <li><span className="pagination-ellipsis">&hellip;</span></li> 
                     {pageLinks}   
                 <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li className="pagination-link">344</li>
            </ul>
        </nav>
    </Container>    
    )
    
}

export default Pagination
