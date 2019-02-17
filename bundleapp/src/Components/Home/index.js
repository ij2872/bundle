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
        <div>
          <h1>Bundle</h1>
          <p>
            your setup, your bundle, <span>all in one click</span>
          </p>
          <button>get started</button>
        </div>
        <div>
            <img src={heroIllustration} />
        </div>
      </header>
      <section>
        <h2>A Solution to Buying Setups</h2>
        <p>
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
        <h2>Getting Started</h2>
        <div>
          <div>
            <img src={oneSVG} />
            <img src={oneIllustration} />
          </div>
          <div>
            <img src={twoSVG} />
            <img src={twoIllustration} />
          </div>
            <img src={threeSVG} />
            <img src={threeIllustration} />
          <div>
          </div>
        </div>
      </section>
      <Link to="/bundle">Potato</Link>
    </div>
  );
};

export default Home;
