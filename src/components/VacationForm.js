// src/components/VacationForm.js
import React, { useState } from 'react';

function VacationForm({ onAddVacation }) {
  const [employeeName, setEmployeeName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVacation({ employeeName, startDate, endDate });
    setEmployeeName('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Urlaubsantrag einreichen</h3>
      <label>
        Mitarbeitername:
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Startdatum:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Enddatum:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Urlaub einreichen</button>
    </form>
  );
}

export default VacationForm;
