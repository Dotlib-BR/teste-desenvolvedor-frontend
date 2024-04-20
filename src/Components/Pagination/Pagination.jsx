import "./Pagination.css"

function Pagination({ postPerPage, totalPosts, setPageNumber, pageNumber }) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {

        pageNumbers.push(i);

    }

    return (
        <nav className="pagination">
            <ul >
                <li className="page-item">
                    <button
                        onClick={() =>
                            pageNumber > 1 ?
                                setPageNumber(pageNumber - 1)
                                :
                                setPageNumber(1)
                        }
                    >
                        &lt;
                    </button>
                </li>
                {
                    pageNumbers.map((item) => (
                        <li key={item} className="page-item">
                            <button href="!#" className="page-link" onClick={() => setPageNumber(item + 1)}>
                                {item + 1}
                            </button>
                        </li>
                    ))
                }
                <li className="page-item">
                    <button
                        onClick={() =>
                            pageNumber < pageNumbers.length ?
                                setPageNumber(pageNumber + 1)
                                :
                                setPageNumber(3)
                            }
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination