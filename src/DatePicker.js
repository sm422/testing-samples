import {DateTime} from 'luxon';
import React from 'react';

function DatePicker(props){
  const [formDate, updateFormDate] = React.useState()

  function handleDateChange(event){
    updateFormDate(event.target.value);
    props.setDate(event.target.value);
  }

  return(
    <form>
     <label for="date">Select Date:</label><br/>
      <input type="date" id="date"
         value={formDate}
         min="2018-01-01" max="2022-12-31" onChange={handleDateChange}>
      </input>
    </form>
  );
}

export default DatePicker;
