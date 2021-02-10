import React, { useEffect, useRef, useState } from "react";
import Template from "../components/Template";
import {
  LivingSlider,
  livingArrangementsLabels,
  SocialiseSlider,
  numInteractionsLabels,
  FromHomeSlider,
  fromHomeLabels,
} from "../utilities/mySliders";
import gsap from "gsap";
import Mailchimp from "react-mailchimp-form";
import CountUp from "react-countup";
import ReactGA from "react-ga";

type SliderNameType = "amount-social" | "working-from-home" | "where-live";
type LivingType = "" | "Village" | "Town" | "Small City" | "Medium City" | "Large City";

ReactGA.initialize("UA-189392345-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const getLivingFromValue = (value: number) => {
  let livingWhere: LivingType;
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
  const [whereLiveSliderVal, setWhereLiveSliderVal] = useState<LivingType>("");
  const [amountSocialSliderVal, setAmountSocialSliderVal] = useState<number>(0);

  const [result, setResult] = useState<number>(0);
  const [countingResult, setCountingResult] = useState<number>(0);
  let schoolButtonRefs = useRef<Array<HTMLButtonElement>>([null]);
  let publicTransButtonRefs = useRef<Array<HTMLButtonElement>>([null]);
  let customerButtonRefs = useRef<Array<HTMLButtonElement>>([null]);
  let tempRef = useRef<GSAPTween>(null);
  let calculateButtonRef = useRef<HTMLButtonElement>(null);

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

  const getInititalVariableValuesForCalc = () => {
    let studentData: number, workData: number, excurrlicData: number, pubTransData: number, walkingData: number;
    switch (whereLiveSliderVal) {
      case "Village":
        studentData = 100;
        workData = 42;
        excurrlicData = 146;
        pubTransData = 57;
        walkingData = 971;
        break;
      case "Town":
        studentData = 527;
        workData = 221;
        excurrlicData = 767;
        pubTransData = 1590;
        walkingData = 5119;
        break;
      case "Small City":
        studentData = 954;
        workData = 401;
        excurrlicData = 1391;
        pubTransData = 5219;
        walkingData = 9275;
        break;
      case "Medium City":
        studentData = 2263;
        workData = 951;
        excurrlicData = 3296;
        pubTransData = 29242;
        walkingData = 21982;
        break;
      case "Large City":
        studentData = 3571;
        workData = 1500;
        excurrlicData = 5200;
        pubTransData = 73000;
        walkingData = 34680;
        break;
      default:
        studentData = 0;
        workData = 0;
        excurrlicData = 0;
        pubTransData = 0;
        walkingData = 0;
    }
    return [studentData, workData, excurrlicData, pubTransData, walkingData];
  };

  const handleQuestionButton = (val: boolean, questionNum: number) => {
    let prevState = buttonQuestionValues;
    prevState[questionNum] = val;
    setButtonQuestionValues([...prevState]);
  };

  const handleCalculation = () => {
    let [studentData, workData, excurrlicData, pubTransData, walkingData] = getInititalVariableValuesForCalc();

    workData = buttonQuestionValues[2] ? workData * 30 : workData; //if work with customers
    let studentOrWorkerVal = buttonQuestionValues[0] ? studentData : workData; //if in school
    let publicTransVal = buttonQuestionValues[1] ? pubTransData : pubTransData / 10; //if take public transport
    let workHomeVal = workingHomeSliderVal / 10;
    let extraCurricVal = excurrlicData * amountSocialSliderVal;

    const result = (studentOrWorkerVal + publicTransVal) * workHomeVal + extraCurricVal + walkingData;

    setResult(Math.floor(result));

    document.querySelector(".HOME").scrollTo({ top: 0, behavior: "smooth" });

    tempRef.current = gsap.to(calculateButtonRef.current, { scale: 1.1, duration: 0.2 });
    tempRef.current = gsap.to(calculateButtonRef.current, { scale: 1, duration: 0.2, delay: 0.2 });
  };

  const styleButtonPairs = (value: boolean, refArray) => {
    if (value === true) {
      tempRef.current = gsap.to(refArray.current[0], { color: "purple" });
      tempRef.current = gsap.to(refArray.current[1], { color: "white" });
    } else if (value === false) {
      tempRef.current = gsap.to(refArray.current[1], { color: "purple" });
      tempRef.current = gsap.to(refArray.current[0], { color: "white" });
    }
  };

  useEffect(() => {
    styleButtonPairs(buttonQuestionValues[0], schoolButtonRefs);
  }, [buttonQuestionValues[0]]);

  useEffect(() => {
    styleButtonPairs(buttonQuestionValues[1], publicTransButtonRefs);
  }, [buttonQuestionValues[1]]);

  useEffect(() => {
    styleButtonPairs(buttonQuestionValues[2], customerButtonRefs);
  }, [buttonQuestionValues[2]]);

  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);

    setCountingResult(1);
  }, [result]);

  return (
    <Template title="Socially Distant">
      <div className="HOME">
        <div className="home-wrapper">
          <h1 className="top-heading top-heading-size">Socially-Distant.me</h1>
          <h2 className="heading-subtitle">
            Find out how many human interactions you've missed out on in the past year
          </h2>
          <div className="results-cont">
            <h1>YOUR RESULT:⠀</h1>
            <h1>
              {result ? (
                <CountUp start={0} end={result} duration={4} formattingFn={(val) => val.toLocaleString()} />
              ) : (
                "???"
              )}
              ⠀Interactions
            </h1>
            <h1></h1>
          </div>
          <div className="questions-wrapper">
            <div className="at-school question-cont">
              <h3>Are you currently at school or university?</h3>
              <div>
                <button ref={(el) => (schoolButtonRefs.current[0] = el)} onClick={() => handleQuestionButton(true, 0)}>
                  YES
                </button>
                <button ref={(el) => (schoolButtonRefs.current[1] = el)} onClick={() => handleQuestionButton(false, 0)}>
                  NO
                </button>
              </div>
            </div>
            <div className="use-public-trans question-cont">
              <h3>Do you normally take public transport to work?</h3>
              <div>
                <button
                  ref={(el) => (publicTransButtonRefs.current[0] = el)}
                  onClick={() => handleQuestionButton(true, 1)}
                >
                  YES
                </button>
                <button
                  ref={(el) => (publicTransButtonRefs.current[1] = el)}
                  onClick={() => handleQuestionButton(false, 1)}
                >
                  NO
                </button>
              </div>
            </div>
            <div className="public-facing question-cont">
              <h3>Do you work in a customer facing job?</h3>
              <div>
                <button
                  ref={(el) => (customerButtonRefs.current[0] = el)}
                  onClick={() => handleQuestionButton(true, 2)}
                >
                  YES
                </button>
                <button
                  ref={(el) => (customerButtonRefs.current[1] = el)}
                  onClick={() => handleQuestionButton(false, 2)}
                >
                  NO
                </button>
              </div>
            </div>
            <div className="working-from-home question-cont slider-question">
              <h3>For what percentage of the last year have you been working/ studying from home?</h3>
              <div className="slider-wrapper">
                <FromHomeSlider
                  step={1}
                  marks={fromHomeLabels}
                  min={0}
                  max={10}
                  onChange={(_, val) => handleSlider(val as number, "working-from-home")}
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
                  onChange={(_, val) => handleSlider(val as number, "where-live")}
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
                  onChange={(_, val) => handleSlider(val as number, "amount-social")}
                />
              </div>
            </div>
          </div>
          <div className="calculate-cont">
            <button ref={calculateButtonRef} onClick={handleCalculation}>
              Calculate
            </button>
            <h3>
              <a href="https://albamind.link/socially-distant-research">
                Your result is based off of the raw data and calculations detailed here
              </a>
            </h3>
          </div>
          <div className="bottom-alba-ad">
            <h1>Have you been struggling with your mental health this year?</h1>
            <h2>Sign up to our mental health focused newsletter</h2>
            <Mailchimp
              action="https://neurify.us17.list-manage.com/subscribe/post?u=c148319fd4fc1b8058860036c&amp;id=d404b4611a"
              fields={[
                {
                  name: "EMAIL",
                  placeholder: "Email",
                  type: "email",
                  required: true,
                },
              ]}
              messages={{
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                button: "Sign Up",
              }}
              className="mailchimp-form"
            />
            <h2 className="fav-app">Our Favourite app to help:</h2>
            <a href="https://albamind.link/download">
              <img src="./app-store.jpg" alt="apple" width={250} />
            </a>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;
