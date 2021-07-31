/**
 * Footer component
 * It represents static footer with a link to project repository
 */
import './footer.css';

const Footer = () => (
  <div className="footer">
    <small>
      Full Source Code of This Project Con be found at
      {' '}
      {' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ahmedalima/"
      >
        Here
      </a>
    </small>
  </div>
);

export default Footer;

export {
  Footer,
};
