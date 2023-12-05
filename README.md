# React Rendering
This repository accompanies the article on [Rendering in Angular and React](https://javascript.plainenglish.io/rendering-in-angular-and-react-3fadb53fc616), where we delve into the intricacies of how Angular and React handles rendering in different scenarios. The primary focus is on the initial rendering of an application and the subsequent re-rendering process triggered by updates within the components.

## Project Overview
The article explores the rendering process using a small React application comprising three components:

- **App:** The root component.
- **ChildOne:** A child component of App.
- **ChildTwo:** Another child component of App.

## Rendering Overview
In React, the rendering process unfolds in two primary phases:

### Render Phase
- **Initialization:** The render phase kicks off when the application initially loads, starting from the root component.
- **JSX Transformation:** During the render phase, React traverses each node, invoking the createElement() method. This transforms JSX into React elements, creating JavaScript objects that describe the UI structure.
- **Pass to Commit Phase:** Once the entire component tree has its JSX converted into React elements, they are passed to the commit phase.

### Commit Phase
- **Application to DOM:** The 'react-dom' package is employed in the commit phase to apply these React elements to the DOM.

### State Change and Re-render
- **Trigger:** Upon a state change, React re-renders the associated component.
- **Re-render Process:** During re-render, the render phase restarts from the root of the component. It identifies components marked for updates and invokes the createElement() method to convert JSX into new React elements.
- **Reconciliation:** React performs reconciliation, comparing the new set of React elements with the previous set. Detected changes are handed over to the commit phase for application to the DOM.
- **Commit Phase Efficiency:** While the commit phase is typically fast in React, it's essential to note that the rendering phase can be slow.

## Running the Application
To run the application locally, follow these steps:

1. Make sure you have Node installed (preferrably Node v18.17.1).
2. Clone the repository: `git clone [repository-url]`
3. Navigate to the project folder: `cd [project-folder]`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`
Open your browser and visit the specified URL to view the application.

Feel free to explore the code and use it as a reference while reading the [article](https://javascript.plainenglish.io/rendering-in-angular-and-react-3fadb53fc616) to gain a deeper understanding of React's rendering process.

Happy coding! 🚀