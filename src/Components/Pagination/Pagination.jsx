import "./Pagination.css"

function Pagination({ postPerPage, totalPosts, setPageNumber}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        
        pageNumbers.push(i);
        
    }

  return (
    <nav>
        <ul className="pagination">
            {
                pageNumbers.map((item) => (
                    <li key={item} className="page-item">
                        <a href="!#" className="page-link" onClick={() => setPageNumber(item + 1)}>
                            {item + 1}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination