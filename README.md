# Challenge 01 - Microservice Veterinary Franchise

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

# Use Case Diagram

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/vetclin-use-case-diagram.png)

# ⚙ Tools and Technologies

```
• Node.Js
• Typescript
• MVC - Model-View-Controller
• npm - Packages Manager for Node.js
• Data Bank - RAM Computer Memory
```

# Node Project

```json
{
  "name": "challenge-01-vetclin--jose-conrado",
  "version": "1.0.0",
  "description": "Microservice Veterinary Franchise",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon dist/app.js"
  },
  "author": "Jose Paulo Archetti Conrado",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "dotenv": "^16.3.1",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.2",
    "@types/node": "^12.12.9",
    "nodemon": "^1.19.4"
  }
}
```

## 1 - Node.Js Project Packages (npm)

## 1 . 1 - Production Dependencies 🎉

### body-parser - version: 1.19.0

```
https://www.npmjs.com/package/body-parser/v/1.19.0
```

### dotenv - version: 16.3.1

```
https://www.npmjs.com/package/dotenv/v/16.3.1
```

### express - version: 4.17.1

```
https://www.npmjs.com/package/express/v/4.17.1
```

## 1 . 2 - Development Dependencies 📚

### @types/express - version: 4.17.2

```
https://www.npmjs.com/package/@types/express/v/4.17.2
```

### @types/node - version: 12.12.9

```
https://www.npmjs.com/package/@types/node/v/12.12.9
```

### nodemon - version: 1.19.4

```
https://www.npmjs.com/package/nodemon/v/1.19.4
```

# ⚙ Instructions to run the application locally

## 1 - Project repository location

```
https://github.com/ppconrado/challenge-01-vetclin
```

## 2 - Setup enviroment variables:

### 2 . 1 - Server port configuration 💻

```
PORT=   <server-port>
```

### 2 . 2 - Working enviroment configuration 🦺

```
NODE_ENV=   <dev-prod>
```

## 3 - Setup typescript compiler options (tsconfig.json):

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## 4 - Install projects dependencies (npm packages)

```
npm install
```

## 5 - Compile TypeScript Project to JavaScript

```
tsc -w
```

## 6 - Run the Project in JavaScript

```
npm start
```

---

# Results

### GET - Retrieves All Tutors - {{URL}}/tutors

res.body ( success response - 200 OK )

```json
[
  {
    "id": 1,
    "name": "Jonh Doe",
    "phone": "85989323895",
    "email": "jose.abreu@compasso.com",
    "date_of_birth": "1993-12-12 10:10",
    "zip_code": "61760000",
    "pets": [
      {
        "id": 1,
        "name": "Lilo",
        "species": "dog",
        "carry": "p",
        "weight": 5,
        "weight": 5,
        "date_of_birth": "1993-12-12 10:10"
      }
    ]
  }
]
```

### POST - Create a New Tutor - {{URL}}/tutor

req.body

```json
{
  "name": "Jonh Doe",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000"
}
```

res.body ( success response - 201 Created )

```json
{
  "id": "0.42764763642531944",
  "name": "Jonh Doe",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000",
  "pets": []
}
```

res.body ( error response - 500 Internal Server Error )

```json
{
  "message": "Could not find tutor!"
}
```

### PUT - Updates a Tutor - {{URL}}/tutor/0.42764763642531944

req.body

```json
{
  "name": "Jonh Doe",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000"
}
```

res.body ( success response - 200 OK )

```json
{
  "message": "Updated!",
  "updatedTutor": {
    "id": "0.42764763642531944",
    "name": "Jonh Doe",
    "phone": "85989323895",
    "email": "johndoe@compasso.com",
    "date_of_birth": "1993-12-12 10:10",
    "zip_code": "8765-4322",
    "pets": [
      {
        "id": "0.4621236826878028",
        "name": "Lilo",
        "species": "dog",
        "carry": "p",
        "weight": 5,
        "date_of_birth": "1993-12-12 10:10"
      }
    ]
  }
}
```

res.body ( error response - 500 Internal Server Error )

```json
{
  "message": "Could not find tutor!"
}
```

### DELETE - Deletes a Tutor - {{URL}}/tutor/0.44084269827947664

```json
{
  "message": "Tutor deleted!"
}
```

res.body ( error response - 500 Internal Server Error )

```json
{
  "message": "Could not find tutor!"
}
```

res.body

```json
{
  "id": "0.42764763642531944",
  "name": "Jonh Doe",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000",
  "pets": []
}
```

## POST Creates a Pet & Adds a Tutor {localhost:3000/pet/0.7366058000978049}

req.body

```json
{
  "name": "Lilo",
  "species": "dog",
  "carry": "p",
  "weight": 5,
  "date_of_birth": "1993-12-12 10:10"
}
```

res.body

```json
{
  "id": "0.42764763642531944",
  "name": "Jonh Doe",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000",
  "pets": [
    {
      "id": "0.4621236826878028",
      "name": "Lilo",
      "species": "dog",
      "carry": "p",
      "weight": 5,
      "date_of_birth": "1993-12-12 10:10"
    }
  ]
}
```

## GET

Routes
GET Routes
Get all tutors: /tutors Example response

```json
[
  {
    "id": 1,
    "name": "Jonh Doe",
    "phone": "85989323895",
    "email": "jose.abreu@compasso.com",
    "date_of_birth": "1993-12-12 10:10",
    "zip_code": "61760000",
    "pets": [
      {
        "id": 1,
        "name": "Lilo",
        "species": "dog",
        "carry": "p",
        "weight": 5,
        "weight": 5,
        "date_of_birth": "1993-12-12 10:10"
      }
    ]
  }
]
```

POST Routes

/tutor Example request body (all items required):

```json
{
  "id": 1,
  "name": "Jonas",
  "phone": "85989323895",
  "email": "jonas@paidepet.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000"
}
```

/pet/:tutorId E x a m p l e r eq u es t bod y (all it ems required):

```json
{
  "id": 1,
  "name": "Lilo",
  "species": "dog",
  "carry": "p",
  "weight": 5,
  "date_of_birth": "1993-12-12 10:10"
}
```

PUT Routes
/tutor/:id Example request body (all items required):

```json
{
  "id": 1,
  "name": "hallex",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000"
}
```

/pet/:petId/tutor/:tutorId request body (all items required):

```json
{
  "id": 1,
  "name": "Lilo",
  "species": "dog",
  "carry": "p",
  "weight": 5,
  "date_of_birth": "1993-12-12 10:10"
}
```

DELETE Routes:
/tutor/:id

status code 200
/pet/:petId/tutor/:tutorId
status code 200

# Next Steps

- interfaces
- banco de dados MongoDB
-
