# Challenge 01 - Microservice Veterinary Franchise

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/vetclin.png)

# Description

```A client hired Compass to build a new microservice for its veterinary franchise.
This microservice will be used by all the clinics they own for internal client and attendances management.
So, you have this new mission, to build the POC - (Proof Of Concept) foundations of this brand new microservice,
so the sales and management team can have the primary technical view of the needs
that the client has.
```

---

---

# Class Diagram

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/vetclin-class-diagram.png)

# Use Case Diagram

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/vetclin-use-case-diagram.png)

Please see the following resources inside this repo:

- [UML Files](/documentation/UML)

---

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

Please see the following resources inside this repo:

- [Postman File](/postman/Challenge%2001-VetClin-Jose-Conrado.postman_collection.json)

---

## STEP 1 - Proof Of Concept: Conduct Research and Development

---

# ⚙ Tools and Technologies

```
• Node.Js
• Typescript
• MVC - Model-View-Controller
• npm - Packages Manager for Node.js
• Data Bank - RAM Computer Memory
```

---

## STEP 2 - Proof Of Concept: Specify The Need For Our Idea

---

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

Please see the following resources inside this repo:

- [Node Project File](/package.json)

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

Please see the following resources inside this repo:

- [Node Project File](/package.json)

---

## STEP 3 - Proof Of Concept: Check Our Idea’s Feasibility

---

# Tests and Outputs

Please see the following resources inside this repo:

- [Postman File](/postman/Challenge%2001-VetClin-Jose-Conrado.postman_collection.json)

### GET - Retrieves All Tutors - {{URL}}/tutors

• res.body ( Success Response - 200 OK )

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
        "date_of_birth": "1993-12-12 10:10"
      }
    ]
  }
]
```

### POST - Create a New Tutor - {{URL}}/tutor

• req.body

```json
{
  "name": "Jonh Doe",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000"
}
```

• res.body ( Success Response - 201 Created )

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

### PUT - Updates a Tutor - {{URL}}/tutor/0.42764763642531944

• req.body

```json
{
  "name": "Jonh Doe",
  "phone": "85989323895",
  "email": "jose.abreu@compasso.com",
  "date_of_birth": "1993-12-12 10:10",
  "zip_code": "61760000"
}
```

• res.body ( Success Response - 200 OK )

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

• res.body ( Error Response - 500 Internal Server Error )

```json
{
  "message": "Could not find tutor!"
}
```

### DELETE - Deletes a Tutor - {{URL}}/tutor/0.44084269827947664

• res.body ( Success Response - 200 OK )

```json
{
  "message": "Tutor deleted!"
}
```

• res.body ( Error Response - 500 Internal Server Error )

```json
{
  "message": "Could not find tutor!"
}
```

### POST - Creates a Pet & Adds a Tutor - {{URL}}/pet/0.42764763642531944

• req.body

```json
{
  "name": "Lilo",
  "species": "dog",
  "carry": "p",
  "weight": 5,
  "date_of_birth": "1993-12-12 10:10"
}
```

• res.body ( Success Response - 201 Created )

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

### PUT - Updates a Pet's Info - {{URL}}/pet/0.4621236826878028/tutor/0.42764763642531944

• req.body

```json
{
  "name": "Scooby",
  "species": "dog",
  "carry": "p",
  "weight": 10,
  "date_of_birth": "1993-12-12 10:10"
}
```

• res.body ( Success Response - 201 Created )

```json
{
  "message": "Updated!",
  "updatedPet": {
    "id": "0.4621236826878028",
    "name": "Scooby",
    "species": "dog",
    "carry": "p",
    "weight": 10,
    "date_of_birth": "1993-12-12 10:10"
  }
}
```

• Tutor Updated - GET - Retrieves All Tutors - {{URL}}/tutors

```json
[
  {
    "id": "0.42764763642531944",
    "name": "Jonh Doe",
    "phone": "85989323895",
    "email": "johndoe@compasso.com",
    "date_of_birth": "1993-12-12 10:10",
    "zip_code": "8765-4322",
    "pets": [
      {
        "id": "0.4621236826878028",
        "name": "Scooby",
        "species": "dog",
        "carry": "p",
        "weight": 10,
        "date_of_birth": "1993-12-12 10:10"
      }
    ]
  }
]
```

### DELETE - Deletes a Pet from a Tutor - {{URL}}/pet/0.4621236826878028/tutor/0.42764763642531944

• res.body ( Success Response - 200 OK )

```json
{
  "message": "Pet deleted!"
}
```

• Pet Deleted - GET - Retrieves All Tutors - {{URL}}/tutors

```json
[
  {
    "id": "0.42764763642531944",
    "name": "Jonh Doe",
    "phone": "85989323895",
    "email": "johndoe@compasso.com",
    "date_of_birth": "1993-12-12 10:10",
    "zip_code": "8765-4322",
    "pets": []
  }
]
```

---

---

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/POC.png)

# Discussions

- We tested our idea and the back-end project proved feasible.
- We created the models, rotas and controllers for the Tutor and Pet entities.
- Next steps will be a Data Bank implementation and a user's interface.

# Next Steps

- Front-End - Server-Side-Render
- Data Bank (NoSql) - MongoDB
- Arquiteture - Repository and Service layers

---

# ⚙ Instructions to run the application locally

## 1 - Project repository location

```
https://github.com/ppconrado/challenge-01-vetclin
```

Please see the following resources inside this repo:

- [Application Repository](/)

## 2 - Setup enviroment variables:

### 2 . 1 - Server port configuration 💻

```
PORT=   <server-port>
```

Please see the following resources inside this repo:

- [Enviroment Variables](/.env.example)

### 2 . 2 - Working enviroment configuration 🦺

```
NODE_ENV=   <dev-prod>
```

Please see the following resources inside this repo:

- [Enviroment Variables](/.env.example)

## 3 - Setup typescript compiler options:

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

Please see the following resources inside this repo:

- [TypeScript Compiler Options](/tsconfig.json)

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

# ⚙ Instructions to Test the Application

Please see the following resources inside this repo:

- [Postman File](/postman/Challenge%2001-VetClin-Jose-Conrado.postman_collection.json)

# ⚙ Code Paths

Please see the followings resources inside this repo:

- [App](/src/app.ts/)
- [Models](/src/models/)
- [Routes](/src/routes/)
- [Controllers](/src/controllers/)
