import React, { useEffect, useState } from 'react';

import './App.scss';

import Appointment from './components/Appointment';
import DayList from './components/DayList';
import {
  createInterview,
  deleteInterview,
  getAppointmentsWithDayId,
  getDays,
  getInterviewersWithDayId,
  updateInterview,
} from './api';

export default function Application() {
  const [dayId, setDayId] = useState(0);
  const [days, setDays] = useState();
  const [appointments, setAppointments] = useState();
  const [availableInterviewers, setAvailableInterviewers] = useState();

  useEffect(() => {
    const handleAPIFetch = async () => {
      const fetchedDays = await getDays();
      const topDay = fetchedDays.days[0];
      const { appointments: fetchedAppointments } =
        await getAppointmentsWithDayId(topDay.id);
      const { interviewers: fetchedInterviewers } =
        await getInterviewersWithDayId(topDay.id);
      setAvailableInterviewers(fetchedInterviewers);
      setAppointments(fetchedAppointments);
      setDays(fetchedDays.days);
      setDayId(topDay.id);
    };
    handleAPIFetch();
  }, []);

  const handleAPIFetchOnDayChange = async (newDayId) => {
    const { appointments: fetchedAppointments } =
      await getAppointmentsWithDayId(newDayId);
    const { interviewers: fetchedInterviewers } =
      await getInterviewersWithDayId(newDayId);
    setAvailableInterviewers(fetchedInterviewers);
    setAppointments(fetchedAppointments);
    setDayId(newDayId);
  };

  useEffect(() => {
    // TODO: add web socket related codes
  }, []);

  const handleCreateInterview = async (appointmentId, interview) => {
    const { student, interviewer } = interview;
    const interviewerId = interviewer.id;
    const { interview: newInterview } = await createInterview({
      appointmentId,
      interviewerId,
      student,
    });
    return newInterview;
  };

  const handleUpdateInterview = async (interviewId, interview) => {
    const { interview: updatedInterview } = await updateInterview({
      interviewId,
      interview,
    });

    return updatedInterview;
  };

  const handleDeleteInterview = async (id) => {
    await deleteInterview(id);
  };

  const handleSpotPlus = (id) => {
    const newDays = days.map((day) => {
      if (day.id === id) {
        return { ...day, spots: day.spots + 1 };
      }
      return day;
    });
    setDays(newDays);
  };

  const handleSpotMinus = (id) => {
    const newDays = days.map((day) => {
      if (day.id === id) {
        return { ...day, spots: day.spots - 1 };
      }
      return day;
    });
    setDays(newDays);
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
          {days && (
            <DayList
              days={days}
              value={dayId}
              onChange={handleAPIFetchOnDayChange}
            />
          )}
        </nav>
      </section>
      <section className="schedule">
        {appointments &&
          appointments.map((appointment) => (
            <Appointment
              key={appointment.id}
              interviewers={availableInterviewers}
              {...appointment}
              handleCreateInterview={handleCreateInterview}
              handleUpdateInterview={handleUpdateInterview}
              handleDeleteInterview={handleDeleteInterview}
              handleSpotPlus={handleSpotPlus}
              handleSpotMinus={handleSpotMinus}
            />
          ))}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
