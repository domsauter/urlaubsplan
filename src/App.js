// src/App.js
import React, { useState } from 'react';
import VacationForm from './components/VacationForm';
import VacationList from './components/VacationList';
import EmployeeCalendar from './components/EmployeeCalendar';
import vacationsData from './data/vacationsData';
import './styles.css';

function App() {
  const [vacations, setVacations] = useState([]);

  const addVacation = (vacation) => {
    setVacations([...vacations, vacation]);
  };

  return (
    <div className="App">
      <h1>Urlaubsverwaltung</h1>
      <EmployeeCalendar vacations={vacationsData} />
      <VacationForm onAddVacation={addVacation} />
      <VacationList vacations={vacations} />
    </div>
  );
}

export default App;
