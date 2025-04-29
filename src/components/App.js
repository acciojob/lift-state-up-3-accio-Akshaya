import React, { useState } from "react";
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import './../styles/App.css';

const App = () => {

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div class="parent">
      <h1>Parent Component</h1>

      <div id="child1">
        <h2>ChildComponent1:</h2>
        <ChildComponent1 setSelectedOption={setSelectedOption}/>
        
      </div>

      <div id="child2">
        <h2>ChildComponent2:</h2>
      <ChildComponent2 setSelectedOption={setSelectedOption}/>
      </div>
        {/* Do not remove the main div */}
        <h1>Selected Option: {selectedOption}</h1>
    </div>
  );
};

export default App;
