import React, { useEffect, useState } from "react";

import "./App.scss";

import mockAppointmentsData from "./__mocks__/appointments.json";
import mockDaysData from "./__mocks__/days.json";
import mockInterviewersData from "./__mocks__/interviewers.json";
import Appointment from "./components/Appointment";
import DayList from "./components/DayList";

export default function Application() {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState(mockDaysData);
  const [appointments, setAppointments] = useState(mockAppointmentsData);
  const [availableInterviewers, setAvailableInterviewers] =
    useState(mockInterviewersData);

  useEffect(() => {
    // TODO: get data and set/update state
  }, [day]);

  useEffect(() => {
    // TODO: add web socket related codes
  }, []);

  const bookInterview = (id, interview) => {
    // TODO: book or update an interview
  };

  const cancelInterview = (id) => {
    // TODO: cancel interview
  };

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} value={day} onChange={setDay} />
        </nav>
      </section>
      <section className="schedule">
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            interviewers={availableInterviewers}
            {...appointment}
            bookInterview={(interview) =>
              bookInterview(appointment.id, interview)
            }
            cancelInterview={cancelInterview}
          />
        ))}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
