import React from 'react';

export const QuestionList = ({questions, onQuestionClick}) => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='text-center'>
        {questions.map((question) => (
          <div key={question.id}
          className={`border rounded-lg p-1 bg-white`}>
            <p className='font-bold text-2xl pb-2'>{question.text}</p>

            <div>
              {question.options.map((option, optionIndex) => (
                <div
                key={optionIndex}
                className='font-bold border-b border-black text-xl cursor-pointer shadow-lg hover:bg-sky-700 py-2'
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
