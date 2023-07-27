# Challenge #01

## Description

```
A client hired Compass to build a new microservice for its veterinary franchise. This microservice
will be used by all the clinics they own for internal client and attendances management.
So, you have this new mission, to build the POC foundations of this brand new microservice,
so the sales and management team can have the primary technical view of the needs
that the client has.
```

## Class Diagram

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/vetclin-class-diagram.png)

## Features

## Create a REST API following the requested patterns:

```
• GET /tutors -> Retrieves all tutors.
• POST/tutor -> Create a new tutor.
• PUT/tutor/:id -> Updates a tutor.
• DELETE/tutor/:id -> Deletes a tutor.
• POST/pet/:tutorId-> Creates a pet and adds it to a tutor.
• PUT/pet/:petId/tutor/:tutorId -> updates a pet's info
• DELETE/pet/:petId/tutor/:tutorId -> deletes a pet from a tutor.
```

# Instructions

## First: Install all projects dependencies (npm packages)

```
npm install
```

## Second: Compile TypeScript Project to JavaScript

```
tsc -w
```

## Third: Run the Project in JavaScript

```
npm start
```
