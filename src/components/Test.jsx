import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { submitResults } from "../redux/actions/index";

export default function Test() {
  const navigate = useNavigate();
  const initialAnswers = {
    emotion1: {
      example1: "disagree",
      example2: "disagree",
      example3: "disagree",
    },
    emotion2: {
      example1: "disagree",
      example2: "disagree",
      example3: "disagree",
    },
    emotion3: {
      example1: "disagree",
      example2: "disagree",
      example3: "disagree",
    },
    emotion4: {
      example1: "disagree",
      example2: "disagree",
      example3: "disagree",
    },
    emotion5: {
      example1: "disagree",
      example2: "disagree",
      example3: "disagree",
    },
  };

  const emotions = useSelector((state) => state.questions.emotions);
  const isLoading = useSelector((state) => state.isLoading);
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [countFive, setCountFive] = useState(0);
  const dispatch = useDispatch();
  const [prevValues, setPrevValues] = useState({});
  const [answers, setAnswers] = useState(initialAnswers);

  useEffect(() => {
    setPrevValues(answers);
  }, [answers]);

  useEffect(() => {
    dispatch(getQuestions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event, emotion, example, index) => {
    const prevAnswer = 0;
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
        [example]: prevAnswer,
      },
    });
    console.log(prevValues[emotion][example], "previous answer is", prevAnswer);
    if (
      event.target.value === "agree" &&
      prevValues[emotion][example] !== "agree"
    ) {
      handleAgree(index);
    }
  };

  const handleAgree = (index) => {
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
  };

  function submitHandle() {
    let submitObject = { countOne, countTwo, countThree, countFour, countFive };
    dispatch(submitResults(submitObject));
    navigate("/profile");
  }

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
                      <span className="labelspan">Agree</span>
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
                      {console.log(
                        countOne,
                        countTwo,
                        countThree,
                        countFour,
                        countFive
                      )}
                    </label>
                    <label>
                      <span className="labelspan">Disagree</span>
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

      <Button className="submitbtn" onClick={() => submitHandle()}>
        Submit
      </Button>
    </>
  );
}
