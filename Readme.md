# Instalation

1. Clone repository:
```
git clone https://github.com/KwiecienKamil/Samsung-washers-dryers-filtering-test-task.git
```
2. Install dependencies:
## Server
``` 
cd server
``` 
``` 
npm install
```  
``` 
npm start
``` 
## Client
``` 
cd ..
``` 
``` 
cd client
``` 
``` 
npm install
```  
``` 
npm run dev
``` 

# Tech Stack
`React TypeScript Node.js CSS`
I believe for this task the optimal solution was not to complicate things. I hope I wrote clean functions and variables.

# How I would scale this
If the task would need the global state - I would use => `useContext` or `Redux`. For easier setup I picked `Node.js` as a backend in the future I would connect database. Next for larger data of products I would use `pagination` concept for better app performance.

