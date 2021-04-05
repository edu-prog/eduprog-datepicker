import React, { useMemo, useRef } from "react";
import DateObject from "react-date-object";
import WeekDays from "../week_days/week_days";

export default function DayPicker({
  state,
  onChange,
  showOtherDays = false,
  mapDays,
  onlyShowInRangeDates,
  customWeekDays,
  sort,
  numberOfMonths,
  isRTL,
}) {
  const ref = useRef({}),
    {
      today,
      minDate,
      maxDate,
      range,
      date,
      selectedDate,
      onlyMonthPicker,
      onlyYearPicker,
    } = state,
    mustShowDayPicker =
      !state.onlyTimePicker && !onlyMonthPicker && !onlyYearPicker;

  ref.current.date = date;

  const months = useMemo(() => {
    if (!mustShowDayPicker) return [];

    return getMonths(ref.current.date, showOtherDays, numberOfMonths);
  }, [
    date.month.number,
    date.year,
    date.calendar,
    date.locale,
    mustShowDayPicker,
    showOtherDays,
    numberOfMonths,
  ]);

  return (
    mustShowDayPicker && (
      <div className="rmdp-day-picker" style={{ display: "flex" }}>
        {months.map((weeks, monthIndex) => (
          <div
            key={monthIndex}
            style={{
              [isRTL ? "marginLeft" : "marginRight"]:
                monthIndex + 1 < numberOfMonths ? "10px" : "",
            }}
          >
            <WeekDays state={state} customWeekDays={customWeekDays} />
            {weeks.map((week, index) => (
              <div key={index} className="rmdp-week">
                {week.map((object, i) => {
                  //To clear the properties which are added from the previous render
                  object = {
                    date: object.date,
                    day: object.day,
                    current: object.current,
                  };

                  let otherProps = {},
                    mustAddClassName =
                      mustDisplayDay(object) && !object.disabled,
                    className = `${mustAddClassName ? "sd" : ""}`;

                  if (mapDays instanceof Function) {
                    otherProps = getOtherProps(object);

                    if (mustAddClassName)
                      className = `${className} ${otherProps.className || ""}`;
                    if (object.hidden) className = className.replace("sd", "");

                    delete otherProps.className;
                  }

                  return (
                    <div
                      key={i}
                      className={getClassName(object, numberOfMonths)}
                      onClick={() => {
                        if (!mustDisplayDay(object)) return;
                        if (object.disabled) return;

                        selectDay(object, monthIndex, numberOfMonths);
                      }}
                    >
                      <span className={className} {...otherProps}>
                        {mustDisplayDay(object) && !object.hidden
                          ? object.day
                          : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  );

  function mustDisplayDay(object) {
    if (object.current) return true;

    return showOtherDays;
  }

  function selectDay(
    { date: dateObject, current },
    monthIndex,
    numberOfMonths
  ) {
    let { selectedDate, focused, date } = state,
      { hour, minute, second, month } = date;

    dateObject.set({
      hour: selectedDate?.hour || hour,
      minute: selectedDate?.minute || minute,
      second: selectedDate?.second || second,
    });

    if (numberOfMonths === 1 && !current) {
      date = new DateObject(date).toFirstOfMonth();
    } else if (numberOfMonths > 1 && !current) {
      if (monthIndex === 0 && dateObject < date) {
        date = new DateObject(date).toFirstOfMonth();
      }

      if (
        monthIndex > 0 &&
        dateObject.month.index > month.index + monthIndex &&
        monthIndex + 1 === numberOfMonths
      ) {
        date = new DateObject(date).toFirstOfMonth().add(1, "month");
      }
    }

    [selectedDate, focused] = selectDate(dateObject, sort, state);

    onChange(selectedDate, {
      ...state,
      date,
      focused,
      selectedDate,
    });
  }

  function getClassName(object, numberOfMonths) {
    let names = ["rmdp-day"],
      { date, hidden, current, disabled } = object;

    if (!mustDisplayDay(object) || hidden) {
      names.push("rmdp-day-hidden");
    } else {
      if (
        (minDate && date < minDate) ||
        (maxDate && date > maxDate) ||
        disabled
      ) {
        names.push("rmdp-disabled");

        if (!disabled) object.disabled = true;
      }

      if (!current) names.push("rmdp-deactive");

      let mustDisplaySelectedDate =
        (numberOfMonths > 1 && current) || numberOfMonths === 1;

      if (!disabled || (disabled && !onlyShowInRangeDates)) {
        if (isSameDate(date, today)) names.push("rmdp-today");
        if (isSelected(date) && mustDisplaySelectedDate && !range) {
          names.push("rmdp-selected");
        }
      }

      if (range && !disabled && mustDisplaySelectedDate) {
        names.push(getRangeClass(date, selectedDate));
      }
    }

    return names.join(" ");
  }

  function isSelected(dateObject) {
    return [].concat(selectedDate).some((date) => isSameDate(date, dateObject));
  }

  function getOtherProps(object) {
    let otherProps = mapDays({
      date: object.date,
      today,
      currentMonth: state.date.month,
      selectedDate: state.selectedDate,
      isSameDate,
    });

    if (!otherProps || (otherProps && otherProps.constructor !== Object))
      otherProps = {};

    if (otherProps.disabled || otherProps.hidden) object.disabled = true;
    if (otherProps.hidden) object.hidden = true;

    delete otherProps.disabled;
    delete otherProps.hidden;

    return otherProps;
  }
}

function getMonths(date, showOtherDays, numberOfMonths) {
  if (!date) return [];

  let months = [];

  for (let monthIndex = 0; monthIndex < numberOfMonths; monthIndex++) {
    date = new DateObject(date).toFirstOfMonth();

    let monthNumber = date.month.number;
    let weeks = [];

    date.day -= date.weekDay.index;

    for (let weekIndex = 0; weekIndex < 6; weekIndex++) {
      let week = [];

      for (let weekDay = 0; weekDay < 7; weekDay++) {
        week.push({
          date: new DateObject(date),
          day: date.format("D"),
          current: date.month.number === monthNumber,
        });

        date.day += 1;
      }

      weeks.push(week);

      if (weekIndex > 2 && date.month.number !== monthNumber && !showOtherDays)
        break;
    }

    months.push(weeks);
  }

  return months;
}

export function selectDate(
  date,
  sort,
  { multiple, range, selectedDate, onlyMonthPicker, onlyYearPicker }
) {
  if (multiple) {
    selectedDate = selectMultiple();
  } else if (range) {
    selectedDate = selectRange();
  } else {
    selectedDate = new DateObject(date);
  }

  return [
    selectedDate,
    multiple || range ? selectedDate[selectedDate.length - 1] : undefined,
  ];

  function selectMultiple() {
    let dates = selectedDate.filter(
      ($date) => !isSameDate(date, $date, onlyMonthPicker, onlyYearPicker)
    );

    if (dates.length === selectedDate.length) dates.push(new DateObject(date));
    if (sort) dates.sort((a, b) => a - b);

    return dates;
  }

  function selectRange() {
    if (selectedDate.length === 2 || selectedDate.length === 0)
      return [new DateObject(date)];
    if (selectedDate.length === 1)
      return [selectedDate[0], new DateObject(date)].sort((a, b) => a - b);
  }
}

export function isSameDate(
  firstDate,
  secondDate,
  onlyMonthPicker = false,
  onlyYearPicker = false
) {
  if (!firstDate || !secondDate) return false;

  if (firstDate.year === secondDate.year) {
    if (onlyYearPicker) return true;

    if (firstDate.month.number === secondDate.month.number) {
      if (onlyMonthPicker) return true;
      if (firstDate.day === secondDate.day) return true;
    }
  }
}

export function getRangeClass(date, selectedDate, checkMonth) {
  let first = selectedDate[0],
    second = selectedDate[1],
    names = [];

  if (selectedDate.length === 1) {
    if (isSameDate(date, first, checkMonth)) names.push("rmdp-range");
  } else if (selectedDate.length === 2) {
    if (
      date.dayOfBeginning >= first.dayOfBeginning &&
      date.dayOfBeginning <= second.dayOfBeginning
    ) {
      names.push("rmdp-range");
    }

    if (isSameDate(date, first, checkMonth)) names.push("start");
    if (isSameDate(date, second, checkMonth)) names.push("end");
  }

  return names.join(" ");
}
