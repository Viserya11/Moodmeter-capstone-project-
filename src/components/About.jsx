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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            distinctio optio cumque rerum praesentium voluptas. Ullam hic sequi,
            cum assumenda tempore numquam tenetur ab, nisi commodi dolorem
            incidunt! Quidem, eligendi!
          </span>
        </div>
        <div className="d-flex">
          
          <span className="justify">
          <h5>Emotion track</h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            distinctio optio cumque rerum praesentium voluptas. Ullam hic sequi,
            cum assumenda tempore numquam tenetur ab, nisi commodi dolorem
            incidunt! Quidem, eligendi!
          </span>
          <span>
            
            <img
              className="bigfive"
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
