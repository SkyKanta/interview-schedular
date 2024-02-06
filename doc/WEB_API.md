# API Endpoints Documentation

## Appointments

- **GET /appointments?day={dayName}**: Fetch appointments for a specific day.
- **PUT /appointments/{id}**: Update an existing appointment by ID.
- **DELETE /appointments/{id}**: Delete an appointment by ID.

## Days

- **GET /days**: Fetch a list of all days (probably static if only weekdays are considered).
- **GET /days/appointments?day={dayName}**: Fetch appointments for a specific day.
- **GET /days/interviews?day={dayName}**: Fetch appointments for a specific day.

## Interviews

- **POST /interviews**: Schedule a new interview.
- **PUT /interviews/{id}**: Update details of an existing interview.
- **DELETE /interviews/{id}**: Cancel an interview.

## Interviewers

- **GET /interviewers?day={dayName}**: Fetch appointments for a specific day.
