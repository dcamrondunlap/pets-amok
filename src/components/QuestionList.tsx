import React from 'react';

export interface Question {
  id: number;
  text:string;
  options: string[];
}

interface QuestionListProps {
  questions: Question[];
  onQuestionClick: (option: string) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({questions, onQuestionClick}) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        {questions.map((question) => (
          <div key={question.id} className=''>
            <p className='text-lg pb-2'>{question.text}</p>

            <div>
              {question.options.map((option, optionIndex) => (
                <div
                key={optionIndex}
                className='py-2'
                onClick={() => onQuestionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionList;