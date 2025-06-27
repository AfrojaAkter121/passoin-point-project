import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css"; // নিচে CSS টা দিচ্ছি


const ChartAndCalendar = ({  selectedDate, setSelectedDate }) => {
  return (
    <div className="">
      {/* Calendar */}
      <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-100 hover:shadow-2xl transition duration-300">
        <p className="text-xl font-semibold text-teal-700 mb-4">
          📅 Calendar View
        </p>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          className="w-full custom-calendar"
          tileClassName={() => {
            return "hover:bg-teal-100 transition-colors duration-300 cursor-pointer rounded-xl";
          }}
          navigationLabel={({ label }) => (
            <div className="text-center font-semibold text-teal-700 text-base">
              {label}
            </div>
          )}
          prevLabel={
            <span className="text-teal-700 text-lg font-bold px-2">{`‹`}</span>
          }
          nextLabel={
            <span className="text-teal-700 text-lg font-bold px-2">{`›`}</span>
          }
        />
      </div>
    </div>
  );
};

export default ChartAndCalendar;
