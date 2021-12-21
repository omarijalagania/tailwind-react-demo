import React from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { AnimationOnScroll } from "react-animation-on-scroll";

const Calendar = () => {
  return (
    <div className="sm:p-20 p-1">
      <h1 className="text-center">კალენდარი</h1>
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: "event 1", date: "2019-04-01" },
            { title: "event 2", date: "2019-04-02" },
          ]}
        />
      </AnimationOnScroll>
    </div>
  );
};

export default Calendar;
