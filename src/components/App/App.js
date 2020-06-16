import React from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import DatePicker from '../DatePicker/DatePicker';

function App() {
  const [date, updateDate] = React.useState();

  function setDate(newDate){
    updateDate(newDate);
  }

  return (
    <div className="App" data-testid="Page Container">
        <DatePicker setDate={setDate}/>
        {date && <Timer date={date}/>}
    </div>
  );
}

export default App;
