import './App.css';
import schedule from './schedule.json';

const schedulearray = Array.from(schedule);

function Schedule() {

  const Schedulemap = schedulearray.map((day, index) =>
    (Array.isArray(day.hours)) ?
      <div class="day">
      <h4 class="dayname">{day.day}</h4>
      {day.hours.map((hour, index) =>
        <div class="hourly">
        <p class="timestamp">{hour.hour}</p>
        {hour.activities.map((activity, index) =>
          <p class="event">{activity}</p>
        )}
      </div>
      )}
      </div>
      :
      ""
  );

  return (
    <div id="schedule">
      <div class="text">
        <h3>Schedule</h3>
        <div class="days">
          {Schedulemap}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
