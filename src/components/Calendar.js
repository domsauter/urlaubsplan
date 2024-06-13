// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EmployeeCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
      <h2>Mitarbeiterkalender</h2>
      <Calendar onChange={onChange} value={date} />
      <p>Ausgewähltes Datum: {date.toDateString()}</p>
    </div>
  );
}

export default EmployeeCalendar;
