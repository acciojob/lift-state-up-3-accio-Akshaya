import React from "react";

const ChildComponent2 = ({ setSelectedOption }) =>{
    const handleClick = () => {
        setSelectedOption('Option 2');
    };
  return(
    <button
      onClick={handleClick}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
        Option 2

    </button>
  );
};

export default ChildComponent2;