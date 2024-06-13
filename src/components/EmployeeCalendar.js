// src/components/EmployeeCalendar.js

import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EmployeeCalendar({ vacations }) {
  return (
    <div className="employee-calendar">
      {vacations.map((employee, index) => (
        <div key={index} className="employee-calendar-item">
          <h3>{employee.name}</h3>
          <div className="employee-monthly-calendars">
            {Object.keys(employee.vacations).map((monthKey) => (
              <div key={monthKey} className="employee-monthly-calendar">
                <h4>{monthKey}</h4>
                <Calendar
                  value={[]}
                  tileContent={({ date, view }) =>
                    employee.vacations[monthKey].some(
                      (vacation) =>
                        date >= vacation.startDate && date <= vacation.endDate
                    )
                      ? <div className="vacation-marker"></div>
                      : null
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeCalendar;
