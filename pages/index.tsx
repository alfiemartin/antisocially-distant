import React from "react";
import Template from "../components/Template";
import {
  LivingSlider,
  livingArrangementsLabels,
  SocialiseSlider,
  numInteractionsLabels,
} from "../utilities/mySliders";

const Home = () => {
  return (
    <Template title="Socially Distant">
      <div className="HOME">
        <div className="home-wrapper">
          <h1 className="top-heading top-heading-size">Socially-Distant.me</h1>
          <h2 className="heading-subtitle">
            Find out how many social interactions you've missed out on in the
            past year
          </h2>
          {/* <div className="results">
            <h1 className="results">YOUR RESULTS: </h1>
            <h1 className="answer">{"X"} Interactions</h1>
          </div> */}
          <div className="questions-wrapper">
            <div className="working-from-home question-cont">
              <h3>
                Have you been working/studying from home for more than 80% of
                the pandemic?
              </h3>
              <div>
                <button>YES</button>
                <button>NO</button>
              </div>
            </div>
            <div className="at-school question-cont">
              <h3>Are you currently at school or university?</h3>
              <div>
                <button>YES</button>
                <button>NO</button>
              </div>
            </div>
            <div className="use-public-trans question-cont">
              <h3>Do you normally take public transport to work?</h3>
              <div>
                <button>YES</button>
                <button>NO</button>
              </div>
            </div>
            <div className="where-live question-cont">
              <h3>Where do you live?</h3>
              <div className="slider-wrapper">
                <LivingSlider
                  step={1}
                  marks={livingArrangementsLabels}
                  min={0}
                  max={5}
                />
              </div>
            </div>
            <div className="amount-social question-cont">
              <h3>How many days per week did you previously socialise?</h3>
              <div className="slider-wrapper">
                <SocialiseSlider
                  step={1}
                  marks={numInteractionsLabels}
                  min={0}
                  max={7}
                />
              </div>
            </div>
          </div>
          <div className="calculate-cont">
            <button>Calculate</button>
            <h3>
              Your result is based off of the raw data and calculations detailed
              here
            </h3>
          </div>
          <div className="bottom-alba-ad">
            <h1>Have you been struggling with your mental health this year?</h1>
            <h2>Sign up to our mental health focused newsletter</h2>
            <form
              action=""
              className="form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" />
              <button>SIGN UP</button>
            </form>
            <h2>Our Favourite app to help:</h2>
            <img
              src="https://propertyinspect.com/wp-content/uploads/pi-us/2017/10/itunes-app-store-logo.png"
              alt="apple"
              width={250}
            />
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;
