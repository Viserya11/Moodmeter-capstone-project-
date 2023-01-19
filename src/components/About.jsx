import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2>About</h2>
      <div className="aboutcontainer">
        <div className="d-flex">
          <span>
            <img
              className="bigfive"
              src="https://raw.githubusercontent.com/Viserya11/capstone-project/master/src/big_five.png"
              alt=""
            />
          </span>
          <span className="justify">
            <h5>Big 5</h5>
            The Big Five test is the most widely known and scientifically
            accepted personality assessment that measures the human personality
            in five major dimensions: agreeableness, neuroticism, extraversion,
            openness, and conscientiousness.
          </span>
        </div>
        <div className="d-flex">
          <span className="justify">
            <h5>Emotion track</h5>
            With this emotion tracking system, alongside getting your Big Five
            test results you are able to detect your most dominant emotions,
            being able to retake the test anytime you feel like. It helps
            understanding and improving yourself as long as you do your own
            research too.
          </span>
          <span>
            <img
              className="emotions"
              src="https://raw.githubusercontent.com/Viserya11/capstone-project/master/src/emotion.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <Link to="/test">
        <Button>Take test</Button>
      </Link>
    </>
  );
}
