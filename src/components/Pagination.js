import React from 'react'

const Pagination = (props) => {
    const pageLinks = []

    for(let i=1; i<= props.pages; i++){
        let active = props.currentPage == i ? 'active' : '';

    pageLinks.push(<li className={`waves-effect ${active}`} key={i}>{i}</li>)
    }

    return(
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <ul class="pagination-list">
                {pageLinks}
            </ul>
</nav>
    )
    
}

export default Pagination
