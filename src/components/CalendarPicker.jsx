import { useState } from "react";
import { monthNames, weekDays } from "../constants/calendar.js";

const getToday = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

const dateToValue = (date) => {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
};

const formatDate = (value) => {
  if (!value) {
    return "Wybierz datę odbioru";
  }

  return new Date(`${value}T00:00:00`).toLocaleDateString("pl-PL");
};

const CalendarPicker = ({ value, onChange }) => {
  const today = getToday();

  const [isOpen, setIsOpen] = useState(false);

  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const firstDay = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1,
  );

  const daysInMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0,
  ).getDate();

  // Poniedziałek = 0, niedziela = 6
  const leadingDays = (firstDay.getDay() + 6) % 7;

  const calendarDays = Array.from(
    {
      length: leadingDays + daysInMonth,
    },
    (_, index) => (index < leadingDays ? null : index - leadingDays + 1),
  );

  const changeMonth = (amount) => {
    setVisibleMonth(
      (month) => new Date(month.getFullYear(), month.getMonth() + amount, 1),
    );
  };

  return (
    <div className="calendar-picker">
      <button
        className={`calendar-input ${value ? "calendar-input-selected" : ""}`}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <span>{formatDate(value)}</span>

        <svg
          className="calendar-symbol"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4.5" width="18" height="16" rx="2" />

          <path d="M7 2.5v4M17 2.5v4M3 9.5h18M7 13h.01M12 13h.01M17 13h.01M7 17h.01M12 17h.01" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="calendar-popover"
          role="dialog"
          aria-label="Wybierz datę odbioru"
        >
          <div className="calendar-header">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              aria-label="Poprzedni miesiąc"
            >
              ←
            </button>

            <strong>
              {monthNames[visibleMonth.getMonth()]} {visibleMonth.getFullYear()}
            </strong>

            <button
              type="button"
              onClick={() => changeMonth(1)}
              aria-label="Następny miesiąc"
            >
              →
            </button>
          </div>

          <div className="calendar-weekdays">
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="calendar-days">
            {calendarDays.map((day, index) => {
              if (!day) {
                return (
                  <span className="calendar-empty-day" key={`empty-${index}`} />
                );
              }

              const date = new Date(
                visibleMonth.getFullYear(),
                visibleMonth.getMonth(),
                day,
              );

              const dateValue = dateToValue(date);
              const isPast = date < today;
              const isSelected = dateValue === value;
              const isToday = dateValue === dateToValue(today);

              return (
                <button
                  className={[
                    isSelected ? "calendar-day-selected" : "",
                    isToday ? "calendar-day-today" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  type="button"
                  key={dateValue}
                  disabled={isPast}
                  onClick={() => {
                    onChange(dateValue);
                    setIsOpen(false);
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <input type="hidden" name="date" value={value} required />
    </div>
  );
};

export default CalendarPicker;
