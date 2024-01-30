import React, {useState, useEffect} from "react";
import QuestionList from "../components/QuestionList";
import '@/app/globals.css';
import {getQuestions} from '@/api/api'



const IndexPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions  = async() => {
      try {
        const questionsData = await getQuestions();
        setQuestions(questionsData);
      } catch (error){
        console.error('Error fetching questions', error)
      }
    }

    fetchQuestions();

  }, [])

  const handleQuestionClick = (text) => {
    console.log(`User clicked on: ${text}`);
  };

  return (
    <div className=''>
      <h1 className="flex justify-center text-4xl text-white ">Welcome to TechPaws Haven</h1>
      <QuestionList questions={questions} onQuestionClick={handleQuestionClick} />
    </div>
  )

};

export default IndexPage
