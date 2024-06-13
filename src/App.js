// src/App.js
import React, { useState } from 'react';
import EmployeeCalendar from './components/Calendar';
import VacationForm from './components/VacationForm';
import VacationList from './components/VacationList';
import './styles.css';

function App() {
  const [vacations, setVacations] = useState([]);

  const addVacation = (vacation) => {
    setVacations([...vacations, vacation]);
  };

  return (
    <div className="App">
      <h1>Urlaubsverwaltung</h1>
      <EmployeeCalendar />
      <VacationForm onAddVacation={addVacation} />
      <VacationList vacations={vacations} />
    </div>
  );
}

export default App;
