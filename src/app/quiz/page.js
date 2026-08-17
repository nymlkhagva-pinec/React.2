"use client";

import { useState } from "react";

export default function Home() {
  const questions = [
    {
      question: "JavaScript дээр хувьсагч зарлахад аль нь зөв вэ?",
      answers: [
        "let name = 'Bat'",
        "name := 'Bat'",
        "string name = 'Bat'",
        "make name = 'Bat'",
      ],
      correctAnswer: "let name = 'Bat'",
    },
    {
      question: "5 > 3 гэсэн нөхцлийн хариу юу вэ?",
      answers: ["true", "false", "5", "3"],
      correctAnswer: "true",
    },
    {
      question: "Array-ийн эхний элементийн index хэд вэ?",
      answers: ["0", "1", "-1", "2"],
      correctAnswer: "0",
    },
    {
      question: "Array-д шинэ элемент нэмэхэд аль нь зөв вэ?",
      answers: ["push()", "add()", "insert()", "new()"],
      correctAnswer: "push()",
    },
    {
      question: "if нөхцөл хэзээ ажиллах вэ?",
      answers: [
        "Нөхцөл true үед",
        "Нөхцөл false үед",
        "Үргэлж",
        "Зөвхөн array үед",
      ],
      correctAnswer: "Нөхцөл true үед",
    },
  ];

  const [step, setStep] = useState(0);

  function handleNext() {
    setStep(step + 1);
  }

  //   const newAnswers = {questions.map((each) => {
  //     return each.answers.map((answer) => {
  //         <p>{...answer, isSelected: false}</p>
  //     })
  //   })}

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {questions.map((each, index) => {
        return (
          step === index && (
            <div
              className="border-4 border-gray-800 rounded-2xl flex flex-col items-center p-20 gap-5 w-min bg-white shadow-2xl"
              key={index}
            >
              <p>Question {step + 1}/5</p>
              <p className="text-3xl">{each.question}</p>
              {each.answers.map((answer, index) => {
                return (
                  <button className="border-2 w-lg rounded-xl p-2" key={index}>
                    {answer}
                  </button>
                );
              })}
              <button onClick={handleNext}>NEXT</button>
            </div>
          )
        );
      })}
    </div>
  );
}
