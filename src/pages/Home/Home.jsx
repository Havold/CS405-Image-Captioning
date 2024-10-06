import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <div className="left">
          <img src="/assets/images/picture-03.png" alt="picture-01" />
        </div>
        <div className="right">
          <h1>IMAGE PROCESSING</h1>
          <span>is our specialist</span>
          <button>Get Started</button>
        </div>
      </div>
      <div className="center">
        <div className="left">
          <h1>About us</h1>
          <p>
            Welcome to our image processing platform, where we provide
            cutting-edge tools for enhancing and refining your images. Whether
            you're looking to reduce noise with smoothing techniques, sharpen
            details, or apply powerful edge detection algorithms like Sobel,
            Prewitt, and Canny, we have the solutions you need. Our mission is
            to make complex image processing accessible to everyone, from
            hobbyists to professionals, through an easy-to-use interface. Join
            us in transforming your images with precision and clarity, powered
            by advanced technology.
          </p>
        </div>
        <div className="right">
          <img src="/assets/images/picture-04.png" alt="picture-02" />
        </div>
      </div>
      <div className="bottom">
        <h1>Our Facilities</h1>
        <div className="items">
          <div className="item">
            <img src="/assets/images/facility-01.png" alt="facility-01" />
            <h3>Denoising</h3>
            <p>
              Reduces noise in images by softening pixel variations, resulting
              in smoother textures and improved overall image quality.
            </p>
            <Link to='/denoising'><button>Try it now!</button></Link>
          </div>
          <div className="item">
            <img src="/assets/images/facility-02.png" alt="facility-02" />
            <h3>Sharpening</h3>
            <p>
              Enhances image definition by sharpening edges and fine details,
              making objects and textures appear clearer and more distinct.
            </p>
            <Link to='/sharpening'><button>Try it now!</button></Link>
          </div>
          <div className="item">
            <img src="/assets/images/facility-03.png" alt="facility-03" />
            <h3>Edge Detectors</h3>
            <p>
              Detects and highlights boundaries within an image using algorithms
              like Sobel, Prewitt, and Canny, helping to emphasize object shapes
              and structural details.
            </p>
            <Link to='/edge-detectors'><button>Try it now!</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
