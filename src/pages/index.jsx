import React, {useState, useEffect} from "react";
import QuestionList from "../components/QuestionList";
import '@/app/globals.css';
import {getQuestions, getPets} from '@/api/api'
import PetsDisplay from '@/components/PetsDisplay'



const IndexPage = () => {
  const [questions, setQuestions] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchQuestions  = async() => {
      try {
        const questionsData = await getQuestions();
        setQuestions(questionsData);
      } catch (error){
        console.error('Error fetching questions', error)
      }
    }

    const fetchPets = async() => {
      try {
        const petsData = await getPets();
        setPets(petsData);
      } catch (error) {
        console.error('Error fetching pets', error)
      }
    }

    fetchQuestions();

  }, [])

  const handleQuestionClick = (text) => {
    console.log(`User clicked on: ${text}`);
  };

  return (
    <div>
    <h1 className="flex justify-center text-4xl text-white">Welcome to TechPaws Haven</h1>

    <div>
      <QuestionList questions={questions} onQuestionClick={handleQuestionClick} />
    </div>

    <div>
      <h2>Pets:</h2>
      <PetsDisplay pets={pets} />
    </div>
  </div>
  )

};

export default IndexPage
