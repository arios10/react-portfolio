function Nav({ props }) {
    const pages = props.pages;
    const currentPage = props.currentPage;
    const setCurrentPage = props.setCurrentPage;
  
    return (
      <nav>
        <ul>
          {pages.map((pageTitle) => (
            <li key={pageTitle}>
              <span className={currentPage === pageTitle ? "current" : "undefined"} onClick={() => setCurrentPage(pageTitle)}>
                {pageTitle}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Nav;