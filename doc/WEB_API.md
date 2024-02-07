# API Endpoints Documentation

## Appointments

### **GET /appointments?dayId**

#### Description

Get appointments for specific days.

#### Params

- query : dayId(integer)

#### Response

- {appointments : Appointments[]} (list of appointments)

### **POST /appointments/{appointmentId}/interview**

#### Description

Create a new interview and add it to the appointment with a specific id.

#### Params

- path : appointmentId(integer)

#### Response

- {interview : Interview} (details of the created interview)

### **PUT /appointments/{appointmentId}/interview**

#### Description

Update an interview.

#### Params

- path : appointmentId(integer)

#### Response

- {interview : Interview} (details of the updated interview)

### **DELETE /appointments/{appointmentId}/interview**

#### Description

Delete an interview.

#### Params

- path : appointmentId(integer)

#### Response

- {message : string} (confirmation message)

## Days

### **GET /days**

#### Description

Fetch a list of all days (probably static if only weekdays are considered).

#### Response

- {days : Days[]} (list of days)

## Interviewers

### **GET /interviewers/?dayId**

#### Description

Get interviewers for specific days.

#### Params

- query : dayId(integer)

#### Response

- {interviewers : Interviewers[]} (list of interviewers for a specific day)
