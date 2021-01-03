import './schedule.scss';
import schedule from './schedule.json';

const schedulearray = Array.from(schedule);

function Schedule() {

  const Schedulemap = schedulearray.map((day, index) =>
    (Array.isArray(day.hours)) ?
      <div className="day" id={day.day}>
        <h4 className="dayname">{day.day}</h4>
        {day.hours.map((hour, index) =>
          <div className="hourly">
          <p className="timestamp">{hour.hour}</p>
          {hour.activities.map((activity, index) =>
            <p className="event">{activity}</p>
          )}
        </div>
        )}
      </div>
      :
      ""
  );

  return (
    <div id="schedule">
      <div className="text">
        <h3>Schedule</h3>
        <div className="days">
          {Schedulemap}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
