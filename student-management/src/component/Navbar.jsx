function Navbar({ studentCount, searchTerm, setSearchTerm }) {
  return (
    <header className="navbar">
      <div>
        <p className="navbar-kicker">Internship Assignment</p>
        <h2>Student Management System</h2>
      </div>

      <div className="navbar-tools">
        <label className="search-box" htmlFor="student-search">
          <span>Search student</span>
          <input
            id="student-search"
            type="search"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>

        <div className="counter-pill">
          Total Students: <strong>{studentCount}</strong>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
