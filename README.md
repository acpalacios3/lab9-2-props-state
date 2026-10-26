## "Character Counter: React and TypeScript"**

## Description

***"This project create an interactive character counter application that demonstrates state management and event handling in React. The application will allow users to input text and see real-time statistics about their input, including character count, word count, and reading time."***

## Technologies Used

1. React: To build reusable UI components and update the interface dynamically.
2. TypeScript: To define interfaces, specify prop types, and improve type safety.
3. JavaScript: To implement event handling, text processing, and statistics calculations.
4. React Hooks (useState): To store the text entered by the user and update the application state.
5. Tailwind CSS: To style the application, manage spacing, apply colors, and create a responsive layout.
6. Vite: To run the development server and build the application.

## How to Run the Application

1. Install the dependencies:
npm install
2. Start the development server:
npm run dev
3. Open the local URL displayed in the terminal in your browser.

## Tailwind CSS Installation
1. Installed Tailwind CSS and the Vite plugin using:
 npm install tailwindcss @tailwindcss/vite.

2. Configured the Tailwind CSS plugin in vite.config.ts.
3. Imported Tailwind CSS in the main CSS file using @import "tailwindcss";.

## Components

1. CharacterCounter

The CharacterCounter component is the parent component responsible for managing the text state and calculating the statistics.
The component passes the calculated statistics to StatsDisplay through props.

2. TextInput

The TextInput component provides a text area where users can enter or edit their text.

It uses its own useState Hook to store the current input value. The onChange event detects changes when the user types. 

3. StatsDisplay

The StatsDisplay component receives the calculated statistics through the stats prop and displays them to the user.

## TypeScript Interfaces

I used TypeScript interfaces to define the structure of the data and props passed between components. The interfaces are defined in a separate types file and imported where needed.

## Notes

Responsive Design : I used Tailwind CSS responsive classes to adapt the statistics layout to different screen sizes.

