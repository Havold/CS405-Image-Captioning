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
          <h1>IMAGE CAPTIONING</h1>
          <span>is our specialist</span>
          <Link to="/image-captioning">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
      <div className="center">
        <div className="left">
          <h1>About us</h1>
          <p>
            Welcome to our platform dedicated to advancing the field of Image
            Captioning, where we integrate state-of-the-art models to bridge the
            gap between vision and language. Our focus lies in exploring and
            leveraging cutting-edge model combinations. Our mission is to make
            the art of Image Captioning accessible and impactful, whether you're
            creating captions for accessibility, media, or creative
            storytelling. Dive into the world of AI-driven insights and redefine
            how images and words come together!
          </p>
        </div>
        <div className="right">
          <img src="/assets/images/picture-04.png" alt="picture-02" />
        </div>
      </div>
      <div className="bottom">
        <h1>Our Model</h1>
        <div className="items">
          <div className="item">
            <img src="/assets/images/facility-01.png" alt="facility-01" />
            <h3>CLIP + mT5</h3>
            <p>
              Harnessing the robust visual encoding of CLIP and the multilingual
              text generation capabilities of mT5, this combination excels in
              producing diverse and accurate captions in multiple languages.
            </p>
            <Link to="/image-captioning?model=clip-mt5">
              <button>Try it now!</button>
            </Link>
          </div>
          <div className="item">
            <img src="/assets/images/facility-02.png" alt="facility-02" />
            <h3>CLIP + mBART</h3>
            <p>
              By pairing CLIP with mBART, we enable enhanced cross-lingual
              understanding, allowing for contextually rich and culturally aware
              captions tailored to various global audiences.
            </p>
            <Link to="/image-captioning?model=clip-mbart">
              <button>Try it now!</button>
            </Link>
          </div>
          <div className="item">
            <img src="/assets/images/facility-03.png" alt="facility-03" />
            <h3>CLIP + PhoGPT</h3>
            <p>
              For Vietnamese-specific use cases, CLIP and PhoGPT work seamlessly
              to generate high-quality captions that are linguistically precise
              and contextually relevant.
            </p>
            <Link to="/image-captioning?model=clip-phogpt">
              <button>Try it now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
