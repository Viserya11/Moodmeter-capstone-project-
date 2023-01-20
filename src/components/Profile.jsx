import React from "react";
import { Container } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import { registerables } from "chart.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
Chart.register(ArcElement, ...registerables);

export default function Profile() {
  const textToSent = useSelector((state) => state.questions.emotions);

  const [resultsData, setResultsData] = useState({
    text: "Im big",
    inventories: ["big5"],
    scoring: {
      big5: {
        agreeableness: {
          quantile: 0.416,
          score: 0.547,
          confidence: 0.007,
          confidence_text: "very low",
        },
        conscientiousness: {
          quantile: 0.439,
          score: 0.37,
          confidence: 0.007,
          confidence_text: "very low",
        },
        extraversion: {
          quantile: 0.454,
          score: 0.267,
          confidence: 0.007,
          confidence_text: "very low",
        },
        neuroticism: {
          quantile: 0.546,
          score: -0.267,
          confidence: 0.007,
          confidence_text: "very low",
        },
        openness: {
          quantile: 1,
          score: 1,
          confidence: 0.134,
          confidence_text: "low",
        },
      },
    },
    lang: "en",
  });
  const fetchResult = async () => {
    let text = textToSent.map((text) => {
      return text.examples[0] + text.examples[1] + text.examples[2];
    });
    const lastText = `${text[0]} ${text[1]} ${text[2]} ${text[3]} ${text[4]}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "382f78a693msh7a0e8542fdc85a9p1157b9jsn25244694a7b2",
        "X-RapidAPI-Host": "sentino.p.rapidapi.com",
      },
      body: `{"text":"${lastText}", "inventories":["big5"], "lang":"en"}`,
    };
    try {
      let response = await fetch(
        "https://sentino.p.rapidapi.com/score/text",
        options
      );
      if (response.ok) {
        let data = await response.json();
        setResultsData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchResult();
  }, []);
  const emotionsData = useSelector((state) => state.questions.emotionsScore);

  const data = {
    labels: ["Sadness", "Anger", "Joy", "Fear", "Happiness"],
    datasets: [
      {
        data: [
          emotionsData.countOne,
          emotionsData.countTwo,
          emotionsData.countThree,
          emotionsData.countFour,
          emotionsData.countFive,
        ],
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#be03fc",
          "#137e64",
        ],
        hoverBackgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#be03fc",
          "#137e64",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data2 = {
    labels: [
      "Agreeableness",
      "Conscientiousness",
      "Extraversion",
      "Neuroticism",
      "Openness",
    ],
    datasets: [
      {
        data: [
          resultsData.scoring.big5.agreeableness.score,
          resultsData.scoring.big5.conscientiousness.score,
          resultsData.scoring.big5.extraversion.score,
          resultsData.scoring.big5.neuroticism.score,
          resultsData.scoring.big5.openness.score,
        ],
        label: [""],

        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#137e64",
          "#43567A",
          "#F1CE56",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#137e64",
          "#43567A",
          "#F1CE56",
        ],
      },
    ],
  };

  return (
    <>
      {resultsData && resultsData.scoring ? (
        <>
          {" "}
          <h2>Profile</h2>
          <Container className="resultscontainer">
            <div>
              <p>
                Congratulations! You are one step closer to understand yourself
                and your feelings. Below you can see your test results, showing
                your most dominant emotion and your Big Five Personality
                results. Note that the results can depend on which way you took
                it: based on your current mindset and feelings or you gave a
                general overwiew of yourself.
              </p>

              <div className="resultflex">
                <div className="results">
                  <h5>Your feelings</h5>
                  <Doughnut data={data} />
                </div>

                <div className="results">
                  <h5>Big 5 analysis</h5>
                  <Bar data={data2} options={options} />
                </div>
              </div>
            </div>
          </Container>{" "}
        </>
      ) : (
        <>
          <h1>Aaaaaa</h1>
        </>
      )}
    </>
  );
}
