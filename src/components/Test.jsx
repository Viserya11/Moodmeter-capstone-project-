import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Test() {
  const [emotions, setEmotions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [prevValues, setPrevValues] = useState({});
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [countFive, setCountFive] = useState(0);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Viserya11/capstone-project/master/emotions.json"
      );
      if (response.ok) {
        let emotions = await response.json();
        setEmotions(emotions.emotions);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event, emotion, example, index) => {
    setAnswers({
      ...answers,
      [emotion]: {
        ...answers[emotion],
        [example]: event.target.value,
      },
    });
    setPrevValues({
      ...prevValues,
      [emotion]: {
        ...prevValues[emotion],
        [example]: answers[emotion][example],
      },
    });
    if (event.target.value === "agree" && prevValues[emotion][example] !== "agree") {
      if (index % 5 === 0) {
        setCountOne((prevCount) => prevCount + 1);
      } else if (index % 5 === 1) {
        setCountTwo((prevCount) => prevCount + 1);
      } else if (index % 5 === 2) {
        setCountThree((prevCount) => prevCount + 1);
      } else if (index % 5 === 3) {
        setCountFour((prevCount) => prevCount + 1);
      } else {
        setCountFive((prevCount) => prevCount + 1);
      }
    }
  };
  ;

  return (
    <>
      <h2>Take test</h2>
      <Container className="testcontainer">
        {emotions.map((emotion, index) => (
          <div key={emotion.name}>
            <ul>
              {emotion.examples.map((example) => (
                <li key={example}>
                  <h6> {example}</h6>

                  <div className="container d-flex">
                    <label>
                      <span className="labelspan">
                        Agree
                      </span>
                      <input
                        type="radio"
                        value="agree"
                        checked={
                          answers[emotion] &&
                          answers[emotion][example] === "agree"
                        }
                        onChange={(event) =>
                          handleChange(event, emotion, example, index)
                        }
                        
                      />
                     { console.log(countOne, countTwo, countThree, countFour, countFive)}
                    </label>
                    <label>
                      <span className="labelspan">
                      Disagree
                      </span>
                      <input
                        type="radio"
                        value="disagree"
                        checked={
                          answers[emotion] &&
                          answers[emotion][example] === "disagree"
                        }
                        onChange={(event) =>
                          handleChange(event, emotion, example)
                        }
                      />
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Link to="/profile">
        <Button className="submitbtn">Submit</Button>
      </Link>
    </>
  );
}