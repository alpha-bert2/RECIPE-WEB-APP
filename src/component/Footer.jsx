import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ucook-footer">
      <div className="footer-inner">
        <div className="col">
          <h4>Recipeé</h4>
          <p>Simple, tasty recipes — discover and cook with joy.</p>
        </div>
        <div className="col">
          <h5>Explore</h5>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/favourite">Favourite</Link></li>
          </ul>
        </div>
        <div className="col">
          <h5>Support</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Recipeé — All rights reserved</div>
    </footer>
  );
}

export default Footer;
