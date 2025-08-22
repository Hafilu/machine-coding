import React, { useEffect, useState } from "react";

const dummyApi = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    id: 2,
    question: "Which language is primarily used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: 1,
  },
  {
    id: 3,
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 2,
  },
  {
    id: 4,
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Galileo Galilei",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook (Meta)", "Amazon"],
    answer: 2,
  },
];
const ExamInterface = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  useEffect(() => {
    const questionSet = dummyApi.map((item) => ({
      ...item,
      answerd: false,
      selected: null,
      visited: false,
      onReview: false,
    }));
    setQuestions(questionSet);

    setCurrentQuestion({...questionSet[0],visited:true})
    
 
  }, []);

// When clicking on another question
const handleQuestionClick = (question) => {
    // Before leaving current, mark it visited
    setQuestions((prev) =>
      prev.map((item) =>
        item.id === currentQuestion.id ? { ...item, visited: true } : item
      )
    );
  
    setCurrentQuestion(question);
  };
  
  // Next / Prev
  const handleButtonClick = (value) => {
    const nextId = currentQuestion.id + value;
    const nextQuestion = questions.find((item) => item.id === nextId);
  
    if (nextQuestion) {
      // Before leaving, mark current as visited
      setQuestions((prev) =>
        prev.map((item) =>
          item.id === currentQuestion.id ? { ...item, visited: true } : item
        )
      );
  
      setCurrentQuestion(nextQuestion);
    }
  };
  

  const handleOnchange = (i)=>{
    setCurrentQuestion((prev)=>({...prev,selected:i,answerd:true}))
    setQuestions((prev)=>{
        return prev.map((item)=> item.id === currentQuestion.id ? {...item,selected:i,answerd:true}:item)
    })
     
  }

  const handleMarkReview=()=>{
    setQuestions((prev)=>{
        return prev.map((item)=> item.id === currentQuestion.id ? {...item,onReview:!item.onReview}:item)
    })
  }
  

  const colour = (item) => {
    if (item.onReview) return "orange";
    if (item.visited && !item.answerd) return "red";
    if (item.answerd) return "green";
    return "white";  
  };


  
  return (
    <div className="p-6">
      <h1>Exam</h1>

      <div className="flex items-start justify-between gap-4 mt-4">
        <div className="w-[60%]">
          <p>{currentQuestion?.id}-{currentQuestion?.question}</p>
          {currentQuestion?.options?.map((item, i) => (
            <label
              key={i}
              htmlFor={`option_${i}`}
              className="flex flex-row-reverse justify-between p-2 rounded-md bg-white shadow my-2"
            >
              <input
                name="question_options"
                className="cursor-pointer"
                type="radio"
                id={`option_${i}`}
                onChange={()=>handleOnchange(i)}
                checked={currentQuestion.selected === i}
              />
              {item}
            </label>
          ))}

          <div className="flex items-center   justify-between">
            <button onClick={handleMarkReview} className="p-2 bg-purple-800 text-white rounded-md ">Review</button>
            <button disabled={currentQuestion?.id ===1} onClick={()=>handleButtonClick(-1)} className="p-2 bg-gray-400 text-white rounded-md disabled:cursor-not-allowed ">Prev</button>
            <button disabled={currentQuestion?.id===questions.length} onClick={()=>handleButtonClick(1)} className="p-2 bg-green-500 text-white rounded-md disabled:cursor-not-allowed ">Next</button>
          </div>
        </div>

        <div className=" w-[40%] flex flex-wrap">
          {questions?.map((item) => (
            <button
              key={item.id}
              onClick={() => handleQuestionClick(item)}
              className="p-3 border m-2 bg-white"
              style={{ backgroundColor: colour(item) }}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
