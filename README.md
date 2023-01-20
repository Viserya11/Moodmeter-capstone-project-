<h1>MoodMeter</h1>

Welcome to my Capstone Project for Epicode's Front-End Developer Bootcamp!
This React and Redux-based application is a tool to monitor mental well-being using a short 15 questions test, measuring your dominant emotion and also gives your a perspective on your Big 5 Personality traits.

<img
  src="https://i.imgur.com/2j11AbO.png"
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px"/>
  
  After logging in with any username and password you want to pick, you are redirected to the front-page of the application.
  
  <img
  src="https://i.imgur.com/bPLpPhA.png"
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px"/>
  
  From here, you can decide if you want to read a little bit more about the application and the test itself with the "Learn more" button that shows you the "About" page, discussing how the test itself works. From there you can take the test shown below: 
  
  <img
  src="https://i.imgur.com/MDAVPdi.png"
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px"/>
  
  The questions are displayed from the local file called emotions.json, each set of questions given a name such as sadness, joy, fear, anger, and happiness. These are fetched in the component, and by agreeing you add one point to each category, also sending it to the SentinoAPI provided by RapidAPI, to get your fetched and analyzed in the next component, called "Profile".
  
  
  <img
  src="https://i.imgur.com/6qH1AGB.png"
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px"/>
  
  Here your results get saved with Redux and refreshing on page they stay right there. In addition, you can retake the test anytime, monitoring your mental health every day/week/etc.
  
  More features incoming in the near future:
  - Saving weekly results
  - Profile improvements
  <br>
  And much more! :)
  
  <p align="center">Have fun!</p>
