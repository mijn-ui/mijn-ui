import { useEffect, useMemo, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";

import { cn } from "@/utils";

import Button from "../Button";

type CalendarProps = {
  selectedDate?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  dateFormat?: "d" | "dd";
  className?: string;
};

export default function Calendar({
  selectedDate,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
  dateFormat = "d",
  className,
}: CalendarProps) {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState<Date>(selectedDate || today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const months = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const days = useMemo(() => {
    return eachDayOfInterval({
      start: startOfWeek(firstDayCurrentMonth),
      end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
    });
  }, [firstDayCurrentMonth]);

  useEffect(() => {
    if (selectedDate) setSelectedDay(selectedDate);
  }, [selectedDate]);

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function handleDateSelect(day: Date) {
    if (
      (minDate && isBefore(day, minDate)) ||
      (maxDate && isAfter(day, maxDate)) ||
      disabledDates.some((disabledDate) => isEqual(day, disabledDate))
    ) {
      return;
    }
    setSelectedDay(day);
    if (onChange) {
      onChange(day);
    }
  }

  return (
    <div
      className={cn(
        "mx-auto w-full rounded-lg border border-border bg-white p-4",
        className,
      )}
    >
      <div className="flex items-center">
        <Button
          size={"icon"}
          onClick={previousMonth}
          variant={"outline"}
          className="h-7 w-7 rounded-default text-card-description"
        >
          <span className="sr-only">Previous month</span>
          <LuChevronLeft className="h-5 w-5" aria-hidden="true" />
        </Button>

        <h3 className="flex-1 text-center text-sm font-semibold text-foreground">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h3>

        <Button
          size={"icon"}
          onClick={nextMonth}
          variant={"outline"}
          className="h-7 w-7 rounded-default text-card-description"
        >
          <span className="sr-only">Next month</span>
          <LuChevronRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      <div className="grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        {months.map((month) => (
          <div key={month} className="flex h-9 w-9 items-center justify-center">
            {month.slice(0, 2)}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <Button
            key={dayIdx}
            type="button"
            size={"icon"}
            variant={"ghost"}
            onClick={() => handleDateSelect(day)}
            className={getDateButtonClassNames(
              day,
              selectedDay,
              firstDayCurrentMonth,
              disabledDates,
              minDate,
              maxDate,
            )}
            disabled={
              (minDate && isBefore(day, minDate)) ||
              (maxDate && isAfter(day, maxDate)) ||
              disabledDates.some((disabledDate) => isEqual(day, disabledDate))
            }
            aria-selected={isEqual(day, selectedDay)}
          >
            <time dateTime={format(day, "yyyy-MM-dd")}>
              {format(day, dateFormat)}
            </time>
          </Button>
        ))}
      </div>
    </div>
  );
}

const getDateButtonClassNames = (
  day: Date,
  selectedDay: Date,
  firstDayCurrentMonth: Date,
  disabledDates: Date[],
  minDate?: Date,
  maxDate?: Date,
) => {
  const baseClasses = "mx-auto flex h-9 w-9 items-center justify-center";

  const isSelected = isEqual(day, selectedDay);
  const isCurrentDay = isToday(day);
  const isWithinSameMonth = isSameMonth(day, firstDayCurrentMonth);
  const isDisabled =
    (minDate && isBefore(day, minDate)) ||
    (maxDate && isAfter(day, maxDate)) ||
    disabledDates.some((disabledDate) => isEqual(day, disabledDate));

  return cn(
    baseClasses,
    isSelected &&
      isWithinSameMonth &&
      "text-white bg-primary hover:bg-primary hover:text-white",
    isSelected &&
      !isCurrentDay &&
      !isWithinSameMonth &&
      "bg-accent text-gray-400",
    !isSelected && "hover:bg-accent",
    !isSelected && isCurrentDay && "text-primary hover:text-primary",
    !isSelected && !isCurrentDay && isWithinSameMonth && "text-foreground",
    !isSelected &&
      !isCurrentDay &&
      !isWithinSameMonth &&
      "text-border hover:bg-accent hover:text-border",
    isDisabled && "!cursor-not-allowed text-border !bg-transparent",
  );
};
