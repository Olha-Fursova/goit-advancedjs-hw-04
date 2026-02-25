# Async/await syntax and pagination. (Image Search App)
## Project Overview
After learning how HTTP works, what CRUD means, and how frontend communicates with backend services, this homework puts theory into practice. The result is a fully functional Image Search Application with pagination that sends HTTP requests to a real API and processes server responses, renders dynamic content, displays notifications, uses a loader during async operations and opens images in a lightbox gallery.

This project simulates real-world frontend development where the client interacts with an external service.

## Learning Objectives
By completing this homework, I reinforced my understanding of:

- The difference between HTTP and HTTPS

- Common HTTP methods (GET, POST, PUT, DELETE)

- What CRUD operations represent

- How frontend communicates with backend APIs

- How to structure code using modules

- How to work with asynchronous requests

- How to handle server responses and errors

- How to integrate third-party libraries

### Project Structure
goit-advancedjs-hw-03/

├── index.html 
├── js/ 
│ ├── main.js 
│ ├── pixabay-api.js 
│ └── render-functions.js 
├── css/ 
├── .gitignore 
├── .prettierrc 
└── README.md

## Image Search App
The application allows users to enter a keyword in a search field and send a request to the Pixabay API. After receiving matching images: view them in a styled gallery. User also can open large versions of an image in a modal window. For better workflow and loading weight there is a button to Load more, that continues rendering images without restarting the current fetch request.

### How to Run
1. Clone the repository.

2. Install dependencies: 
npm install

3. Start development server: 
npm run dev

4. Open the local development URL provided by Vite

## Conclusion
Homework strengthened my understanding of:

- Client–server communication

- API integration

- Modular architecture

- Pagination logic

- Async/await workflows

- User experience during data fetching

- Clean project organization with Vite
