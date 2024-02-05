# Final Project - NodeJS - Interview Scheduler Server

## Description

Interview Scheduler is a single page application (SPA) built with React that allows users to book, edit and cancel interviews.

Data is persisted by the API server using PostgreSQL or MongoDB database.

The client application communicates with an API server over HTTP

Any updates can be seen in real time on different browsers.

## Demo

Please watch [here](https://www.loom.com/share/480a755e8d37471d85982fd40b98ddb1?sid=29c2602f-f892-4f84-9301-b91969bd54e9)

Users should be able to

- book interview with name and a selected interviewer on different days
- update interview
- cancel interview
- view the available spots on days list
- view the changes made from other user (incognito)
  - remaining spot
  - interviews

## Entities

> You can create your own entities if you have a better way!!

- Appointment

  - id: Unique value for each appointment
  - time: Time of the appointment (You can set as string)
  - day_id: Id of the day of the appointment

- Day

  - id: Unique value for each day
  - name: Name of the day (Monday to Friday)

- Interview

  - id: Unique value for each interview
  - student: Name of the student
  - interviewer_id: Id of the interviewer
  - appointment_id: Id of the appointment

- Interviewer

  - id: Unique value for each interviewer
  - name: Name of the interviewer
  - avatar: Url of the interviewer's avatar

- Available Interviewer

  - id: Unique value for each available interviewer
  - interviewer_id: Id of the interviewer
  - day_id: Id of the day

## Plan ahead

- Before you start coding, you need to prepare a few things:

  - Understand what data you need to store in the database
  - Create an ERD (Use [draw.io](https://www.draw.io/), snapshot it, and save it inside `doc` folder)
  - Decide what endpoints you need to create in the API server
  - Understand what data you need to fetch from the API server
  - Investigate how components will communicate with each other
  - Investigate where you should make the API calls and where you should store the data

## Game plan

For the database, you need to:

- Create a database either `Postgres(Prisma)` or `MongoDB(Mongoose)`
- Create tables or collections
- Seed the data for your development

For the API server, you need to:

- Create the `routes`
- Create the `controllers`
- Create the `models` if applicable
- Setup `cors` middleware
- Implement `socket.io` to provide real time experience

For the client, you need to:

- Manage `states` on booking interview(new or update) and canceling interview
- Send `API requests` to the API server accordingly
- Feel free to create hooks or refactor if needed, **Only minor update can be accepted**
- Implement `socket.io` to provide real time experience

For Bonus

- Implement user `authentication`.

## Setup

- Install dependencies with `npm install`. You have 2 apps in this project, one for the client and one for the server. You will need to run `npm install` in `root` and `frontend` folders to start.
- Create a folder called `backend` and setup based on your needs.
- If you prefer to run both application, use `npm run dev` command, but you will need to update script accordingly first.

## Resources

- [Draw.io](https://www.draw.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/docs/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Socket.io](https://socket.io/)
