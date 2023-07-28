# Challenge #01 - Microservice Veterinary Franchise

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/vetclin.png)

# Description

```
A client hired Compass to build a new microservice for its veterinary franchise. This microservice
will be used by all the clinics they own for internal client and attendances management.
So, you have this new mission, to build the POC foundations of this brand new microservice,
so the sales and management team can have the primary technical view of the needs
that the client has.
```

# Class Diagram

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/vetclin-class-diagram.png)

# REST API Rotas

```
• GET /tutors -> Retrieves all tutors.
• POST/tutor -> Create a new tutor.
• PUT/tutor/:id -> Updates a tutor.
• DELETE/tutor/:id -> Deletes a tutor.
• POST/pet/:tutorId-> Creates a pet and adds it to a tutor.
• PUT/pet/:petId/tutor/:tutorId -> updates a pet's info
• DELETE/pet/:petId/tutor/:tutorId -> deletes a pet from a tutor.
```

# Technologies

```
• NodeJs.
• Typescript.
• MVC - Model-View-Contrller.
• npm - Package manager for Node.js.

```

# NodeJs Project Packages (npm)

## Production Dependencies

### • body-parser - version: 1.19.0

```
https://www.npmjs.com/package/body-parser/v/1.19.0

```

### • dotenv - version: 16.3.1

```
https://www.npmjs.com/package/dotenv/v/16.3.1

```

### • express - version: 4.17.1

```
https://www.npmjs.com/package/express/v/4.17.1

```

## Development Dependencies

### • @types/express - version: 4.17.2

```
https://www.npmjs.com/package/@types/express/v/4.17.2

```

### • @types/node - version: 12.12.9

```
https://www.npmjs.com/package/@types/node/v/12.12.9

```

### • nodemon - version: 1.19.4

```
https://www.npmjs.com/package/nodemon/v/1.19.4

```

# Repository location

```
https://github.com/ppconrado/challenge-01-vetclin

```

# Instructions: How to run the application locally.

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
