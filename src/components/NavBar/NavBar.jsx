import { Link, useLocation } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  const site = useLocation().pathname.split("/")[1];
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/">
          <h1>METAN</h1>
        </Link>
      </div>
      <div className="right">
        <div className="item">
          <Link to="/image-captioning">
            <span className={site === "denoising" ? `active` : ``}>
              Image captioning
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
