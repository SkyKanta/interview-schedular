# API Endpoints Documentation

## Appointments

### **GET /appointments?dayIds**

#### Description

Get appointments. You can get ones for specific date by adding `dayIds` query.

#### Response

```ts
{appointments : Appointments[]}
```

## Interviews

### **POST /**

#### Description

Create a new interview and add it to the appointment with a specific id.

#### Request body

```ts
{   appointmentId : string,
    interviewerId : string,
    student : string
}
```

#### Response

```ts
{
  interview: Interview;
}
```

### **PUT /:id**

#### Description

Update an interview.

#### Params

##### Path

```ts
{
  id: string;
}
```

#### Request Body

```ts
Partial < Interview > {};
```

#### Response

```ts
{
  interview: Interview;
}
```

### **DELETE /:id**

#### Description

Delete an interview.

#### Params

##### path

```ts
{
  id: string;
}
```

#### Response

```ts
{
  message: string;
}
```

## Days

### **GET /days**

#### Description

Fetch a list of all days (probably static if only weekdays are considered).

#### Response

```ts
{days : Days[]}
```

## Interviewers

### **GET /interviewers/**

#### Description

Get interviewers. You can get ones for specific date by adding `dayIds` query.

#### Response

```ts
{interviewers : Interviewers[]}
```
