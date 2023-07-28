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

## 1 - ⚙⚙ Node.Js Project Packages (npm)

## 1.1 - Production Dependencies 🎉

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

## 1.2 - Development Dependencies 📚

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

## 1 - ⚙ Project repository location

```
https://github.com/ppconrado/challenge-01-vetclin
```

## 2 - ⚙ Setup enviroment variables:

### 2.1 - server port configuration 💻

```
PORT=<server port>
```

### 2.2 - working enviroment configuration 🦺

```
NODE_ENV=<dev-prod>
```

## 3 - ⚙ Setup typescript compiler options (tsconfig.json):

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

## 4 - ⚙ Install projects dependencies (npm packages)

```
npm install
```

## 5 - ⚙ Compile TypeScript Project to JavaScript

```
tsc -w
```

## 6 - ⚙ Run the Project in JavaScript

```
npm start
```
