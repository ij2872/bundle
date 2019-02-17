import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import heroIllustration from '../../img/svg/hero-illustration.svg'
import oneSVG from '../../img/svg/one.svg'
import twoSVG from '../../img/svg/two.svg'
import threeSVG from '../../img/svg/three.svg'
import oneIllustration from '../../img/svg/one-illustration.svg'
import twoIllustration from '../../img/svg/two-illustration.svg'
import threeIllustration from '../../img/svg/three-illustration.svg'

const Home = props => {
  return (
    <div>
      <header>
        <div className="hero-container">
          <h1 className="hero-text">Bundle</h1>
          <p className="landing-body landing-body-text">
            your setup, your bundle, <span>all in one click</span>
          </p>
          <div className="btn-go">
            <Link to="/bundles" className="btn-text">get started</Link>
          </div>
        </div>
        <div className="hero-image">
            <img src={heroIllustration} />
        </div>
      </header>
      <section>
        <h2 className="landing-header-2">A Solution to Buying Setups</h2>
        <p className="landing-body">
          Constant frustration comes from setting up a work or hobbyist
          environment. Never struggle shopping for these individual items on
          Amazon anymore with Bundle. We offer an innovative solution allowing
          enthusiasts and professionals to buy a setup through “Bundles”. The
          Bundles are submitted and offered from both community and professional
          to offer a standard answer to “I’d like to start X hobby or work,
          what’s the best setup I can buy for my dollar?” Through Bundles, we
          hope to empower and offer people a smart, collective place to progress
          their work.
        </p>
      </section>
      <section>
        <h2 className="landing-header-2">Getting Started</h2>
        <div className="explanation-container">
          <div className="explanation-item">
            <img src={oneSVG} />
            <img src={oneIllustration} />
          </div>
          <div className="explanation-item">
            <img src={twoSVG} />
            <img src={twoIllustration} />
          </div>
          <div className="explanation-item">
            <img src={threeSVG} />
            <img src={threeIllustration} />
          </div>
        </div>
      </section>
      <Link to="/bundles" className="btn-go">get started</Link>
    </div>
  );
};

export default Home;
