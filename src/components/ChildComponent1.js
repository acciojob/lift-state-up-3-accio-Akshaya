import React from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
    const handleClick = () =>{
        setSelectedOption('Option 1');
    };
    return(
        
        <button
           onClick={handleClick}
           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Option 1

        </button>
    );
};

export default ChildComponent1;