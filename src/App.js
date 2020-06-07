import React from 'react';
import './App.css';
import Timer from './Timer.js';
import DatePicker from './DatePicker';

function App() {
  const [date, updateDate] = React.useState();

  function setDate(newDate){
    updateDate(newDate);
  }

  return (
    <div className="App">
        <DatePicker setDate={setDate}/>
        {date && <Timer date={date}/>}
    </div>
  );
}

export default App;
