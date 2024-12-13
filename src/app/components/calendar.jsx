"use client";
import { Calendar } from "@/components/ui/calendar";

const CalendarUpdate = ({ date, setDate }) => {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="w-[400px] mx-auto"
    />
  );
};
export default CalendarUpdate;
