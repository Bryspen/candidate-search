const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages


  return (
    <nav>
        <ul className="nav">
            <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/SavedCandidates">Saved Candidates</a>
          </li>
        </ul>
    </nav>
  )
};

export default Nav;
