import React, { useEffect, useState } from "react";
import Template from "../components/Template";
import {
  LivingSlider,
  livingArrangementsLabels,
  SocialiseSlider,
  numInteractionsLabels,
  FromHomeSlider,
  fromHomeLabels,
} from "../utilities/mySliders";

type SliderNameType = "amount-social" | "working-from-home" | "where-live";

const getLivingFromValue = (value: number) => {
  let livingWhere: string;
  switch (value) {
    case 0:
      livingWhere = "";
      break;
    case 1:
      livingWhere = "Village";
      break;
    case 2:
      livingWhere = "Town";
      break;
    case 3:
      livingWhere = "Small City";
      break;
    case 4:
      livingWhere = "Medium City";
      break;
    case 5:
      livingWhere = "Large City";
      break;
  }

  return livingWhere;
};

const Home = () => {
  const [buttonQuestionValues, setButtonQuestionValues] = useState(Array(3));
  const [workingHomeSliderVal, setWorkingHomeSliderVal] = useState<number>(0);
  const [whereLiveSliderVal, setWhereLiveSliderVal] = useState<string>("");
  const [amountSocialSliderVal, setAmountSocialSliderVal] = useState<number>(0);

  const handleSlider = (val: number, sliderName: SliderNameType) => {
    switch (sliderName) {
      case "amount-social":
        setAmountSocialSliderVal(val);
        break;
      case "where-live":
        setWhereLiveSliderVal(getLivingFromValue(val));
        break;
      case "working-from-home":
        setWorkingHomeSliderVal(val);
        break;
      default:
        console.error("switch error");
    }
  };

  const handleQuestionButton = (val: boolean, questionNum: number) => {
    let prevState = buttonQuestionValues;
    prevState[questionNum] = val;
    setButtonQuestionValues([...prevState]);
  };

  return (
    <Template title="Socially Distant">
      <div className="HOME">
        <div className="home-wrapper">
          <h1 className="top-heading top-heading-size">Socially-Distant.me</h1>
          <h2 className="heading-subtitle">
            Find out how many social interactions you've missed out on in the
            past year
          </h2>
          <div className="questions-wrapper">
            <div className="at-school question-cont">
              <h3>Are you currently at school or university?</h3>
              <div>
                <button onClick={() => handleQuestionButton(true, 0)}>
                  YES
                </button>
                <button onClick={() => handleQuestionButton(false, 0)}>
                  NO
                </button>
              </div>
            </div>
            <div className="use-public-trans question-cont">
              <h3>Do you normally take public transport to work?</h3>
              <div>
                <button onClick={() => handleQuestionButton(true, 1)}>
                  YES
                </button>
                <button onClick={() => handleQuestionButton(false, 1)}>
                  NO
                </button>
              </div>
            </div>
            <div className="public-facing question-cont">
              <h3>Do you work in a customer facing job?</h3>
              <div>
                <button onClick={() => handleQuestionButton(true, 2)}>
                  YES
                </button>
                <button onClick={() => handleQuestionButton(false, 2)}>
                  NO
                </button>
              </div>
            </div>
            <div className="working-from-home question-cont slider-question">
              <h3>
                Have you been working/studying from home for more than 80% of
                the pandemic?
              </h3>
              <div className="slider-wrapper">
                <FromHomeSlider
                  step={1}
                  marks={fromHomeLabels}
                  min={0}
                  max={10}
                  onChange={(_, val) =>
                    handleSlider(val as number, "working-from-home")
                  }
                />
              </div>
            </div>
            <div className="where-live question-cont slider-question">
              <h3>Where do you live?</h3>
              <div className="slider-wrapper">
                <LivingSlider
                  step={1}
                  marks={livingArrangementsLabels}
                  min={0}
                  max={5}
                  onChange={(_, val) =>
                    handleSlider(val as number, "where-live")
                  }
                />
              </div>
            </div>
            <div className="amount-social question-cont slider-question">
              <h3>How many days per week did you previously socialise?</h3>
              <div className="slider-wrapper">
                <SocialiseSlider
                  step={1}
                  marks={numInteractionsLabels}
                  min={0}
                  max={7}
                  onChange={(_, val) =>
                    handleSlider(val as number, "amount-social")
                  }
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
