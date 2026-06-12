import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Student Studio</h3>
          <p>Built with React to add, search, and manage student records.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#register">Register</a>
            <a href="#students">Students</a>
          </div>
          <div className="footer-column">
            <h4>Status</h4>
            <p>Active and inactive students are supported.</p>
            <p>Search works by student name.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Happy Coding</p>
        <p>© {new Date().getFullYear()} Student Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
