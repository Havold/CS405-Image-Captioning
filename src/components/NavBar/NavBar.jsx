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
          <Link to="/denoising">
            <span className={site === "denoising" ? `active` : ``}>
              Denoising
            </span>
          </Link>
        </div>
        <div className="item">
          <Link to="/sharpening">
            <span className={site === "sharpening" ? `active` : ``}>
              Sharpening
            </span>
          </Link>
        </div>
        <Link to="/edge-detectors">
          <div className="item">
            <span className={site === "edge-detectors" ? `active` : ``}>Edge Detectors</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
