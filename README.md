# Kuasar Test - Country Information SPA

## Project Overview

Kuasar Test is a modern single-page application (SPA) built with ReactJS, integrating GraphQL and Apollo Client. The project displays comprehensive information about various countries, allowing users to explore details such as the country's name, flag, capital, currency, continent, and spoken languages. This SPA is designed with responsiveness in mind and aims to deliver a seamless user experience. Additionally, the project is prepared for AI Assistant integration using NVIDIA NIM API.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)

- Git

### Getting Started

- Clone the repository:
```
git clone https://github.com/rayyalfawazy/kuasar-test.git
```
- Navigate to the project directory:
```
cd kuasar-test
```
- Install dependencies:
```
npm install
```
- Set up environment variables:
Create a ||.env|| file in the root directory with the following content:
```
VITE_GRAPHQL_API=https://countries.trevorblades.com
VITE_NVIDIA_NIM_API_KEY=your_nvidia_nim_api_key_here
```
Replace ||your_nvidia_nim_api_key_here|| with your actual API key.

Start the development server:
```
npm run dev
```
Open the application in your browser at http://localhost:5173.

## Available Features

### Country Information Display:

- Displays country name, emoji flag, capital, and currency.

- Interactive "Show More" feature to reveal continent and spoken languages.

### Responsive Design:

- Optimized for various screen sizes including mobile, tablet, and desktop.

### GraphQL Integration:

- Fetches data from https://countries.trevorblades.com.

### Dynamic Descriptions:

- Generates descriptions based on the number of languages spoken.

## Technical Decisions and Architecture

### Technology Stack

- ReactJS: For building the user interface.

- Vite: For fast development and optimized builds.

- GraphQL & Apollo Client: For efficient data fetching and state management.

- Tailwind CSS: For styling components.

### Component Structure

- ||CountryList.jsx||: Fetches and displays a list of countries.

- ||CountryInformation.jsx||: Handles the detailed display and dynamic descriptions of each country.

- ||Chatbot.jsx||: Placeholder for future AI Assistant integration.

### State Management

- Apollo Client is used for state and data management, ensuring efficient communication with the GraphQL API.

## Future Improvements

### AI Assistant Integration:

- Connect with NVIDIA NIM API to provide features like country-related Q&A, travel recommendations, and translation services.

### Authentication:

- Implement OAuth sign-in with Google or GitHub.

- Create protected routes for authenticated users.

### Enhanced Error Handling:

- Provide more user-friendly error messages and retry options.

### Performance Optimization:

- Further optimize GraphQL queries and UI rendering.

### Testing:

- Implement unit and integration tests to ensure code stability.

###Dark Mode Support:

- Add theme toggle for better user experience.
