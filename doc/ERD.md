# ERD for EventSchedular

![ERD image](/assets/images/erd.png)

### Note

- Day to Appointment: One-to-Many ==> each can have multiple appointments
- Interview to Appointment: One-to-One ==> each interview can be held on only 1 appointment
- Interview to Interviewer: One-to-Many ==> each interviewer can hold multiple interviews
- Available Interviewer to Interviewer and Day: (it's a bridge table) ==> creates Many - to - many by using bridge table.
