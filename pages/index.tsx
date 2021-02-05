import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";
import Template from "../components/Template";

const livingArrangementsLabels = [
  {
    value: 0,
    label: "",
  },
  {
    value: 1,
    label: "Village",
  },
  {
    value: 2,
    label: "Town",
  },
  {
    value: 3,
    label: "Small City",
  },
  {
    value: 4,
    label: "Medium City",
  },
  {
    value: 5,
    label: "Large City",
  },
];

const numInteractionsLabels = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
];

const LivingSlider = withStyles({
  root: {
    color: "#58bbff",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const SocialiseSlider = withStyles({
  root: {
    color: "#58bbff",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Home = () => {
  return (
    <Template>
      <div className="HOME">
        <div className="home-wrapper">
          <h1 className="top-heading">Socially-Distant.me</h1>
          <h1 className="top-heading2">Socially-Distant.me</h1>
          <h2 className="heading-subtitle">
            Find out how many social interactions you've missed out on in the
            past year
          </h2>
          <div className="results">
            <h1 className="results">YOUR RESULTS: </h1>
            <h1 className="answer">{"X"} Interactions</h1>
          </div>
          <div className="working-from-home question-cont">
            <h3>
              Have you been working/studying from home for more than 80% of the
              pandemic?
            </h3>
            <button>YES</button>
            <button>NO</button>
          </div>
          <div className="at-school question-cont">
            <h3>Are you currently at school or university?</h3>
            <button>YES</button>
            <button>NO</button>
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
          <div className="use-public-trans question-cont">
            <h3>Do you noramlly take public transport to work?</h3>
            <button>YES</button>
            <button>NO</button>
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
            <form action="" className="form">
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
