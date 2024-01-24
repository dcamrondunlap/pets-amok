import React, {useState, useEffect} from "react";
import QuestionList, {Question} from "../components/QuestionList";
import '@/app/globals.css';



const IndexPage: React.FC = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9001/api/questions')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch questions: ${response.statusText}`)
      }
      return response.json();
    })
    .then((data) => setQuestions(data))
    .catch((error) => console.error("Error fetching questions", error))
  }, [])

  const handleQuestionClick = (text: string) => {
    console.log(`User clicked on: ${text}`);
  };

  return (
    <div className="">
      <h1 className="flex justify-center text-4xl">Welcome to TechPaws Haven</h1>
      <QuestionList questions={questions} onQuestionClick={handleQuestionClick} />
    </div>
  )

};

export default IndexPage
