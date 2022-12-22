import React from "react";
import { Container } from "react-bootstrap";
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement, Bar);


export default function Profile() {

  const data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  const data2 = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
  
  return (
    <>
      <h2>Profile</h2>
      <Container className="resultscontainer">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum
            sed porro quis itaque! Maxime iusto aliquid pariatur quibusdam porro
            debitis iure? Nam cupiditate distinctio vero in ab necessitatibus
            nesciunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusamus ipsa natus qui eius consequatur explicabo soluta rem a
            voluptate atque ducimus debitis minima ut nulla, minus velit,
            veritatis vitae facilis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati, saepe earum? Explicabo mollitia
            corrupti perspiciatis nam cupiditate beatae eum harum perferendis
            laudantium quia, debitis est, fugit, praesentium sunt et commodi!
          </p>
          
      <h2>Circle Diagram</h2>
      <div className="results">
      <Doughnut data={data} />  <Bar data={data2} />
    </div>

        </div>
      </Container>
    </>
  );
}
