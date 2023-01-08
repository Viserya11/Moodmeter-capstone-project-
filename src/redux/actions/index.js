export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export const fetchQuestions = emotions => ({
  type: FETCH_QUESTIONS,
  emotions
});

export const getQuestions = () => {
    const options = {
      method: "GET",
    };
    return async (dispatch, getState) => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Viserya11/capstone-project/master/emotions.json",
          options
        );
        if (response.ok) {
          const questionsData = await response.json();
          console.log(" getquestions ~ questionData", questionsData);
          dispatch({
            type: FETCH_QUESTIONS,
            payload: questionsData.emotions,
          });
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log(" error", error);
      }
    };
  };