// src/components/VacationList.js
import React from 'react';

function VacationList({ vacations }) {
  return (
    <div>
      <h3>Urlaubsanträge</h3>
      <ul>
        {vacations.map((vacation, index) => (
          <li key={index}>
            {vacation.employeeName}: {vacation.startDate} bis {vacation.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VacationList;
