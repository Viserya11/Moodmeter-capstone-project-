import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Test() {
  const [emotions, setEmotions] = useState([]);
  const [answers, setAnswers] = useState({});

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

  const handleChange = (event, emotion, example) => {
    setAnswers({
      ...answers,
      [emotion]: {
        ...answers[emotion],
        [example]: event.target.value,
      },
    });
  };

  return (
    <>
      <h2>Take test</h2>
      <Container className="testcontainer">
        {emotions.map((emotion) => (
          <div key={emotion.name}>
            <ul>
              {emotion.examples.map((example) => (
                <li key={example}>
                  <h6> {example}</h6>

                  <div className="container d-flex">
                    <label>
                      Agree
                      <input
                        type="radio"
                        value="agree"
                        checked={
                          answers[emotion] &&
                          answers[emotion][example] === "agree"
                        }
                        onChange={(event) =>
                          handleChange(event, emotion, example)
                        }
                      />
                    </label>
                    <label>
                      Disagree
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