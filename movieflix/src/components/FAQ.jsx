import React, { useState } from 'react';
import Data from './FaqQues'; 
import "../styles/faq.css"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1); // Close the currently open question if clicked again
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-8 flex flex-col items-center">
        <h1 className="text-5xl text-center font-bold my-10">Frequently Asked Questions</h1>
        {Data.map((element) => (
          <div
            key={element.id}
            className="mb-4 bg-[#272727] py-4 px-3 w-4/5"
            onClick={() => handleQuestionClick(element.id)}>

            <div className="flex justify-between text-3xl cursor-pointer ">
              <h2 className="">{element.question}</h2>
              <span className={openIndex === element.id ?"rotate":" "}> <i class="fa-solid fa-plus"></i> </span>
            </div>
            {openIndex === element.id && (
              <p className="mt-2 text-3xl text-left flex flex-col  border-t-4 border-black">{element.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
