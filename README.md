# The Cutest Cat

## Description

This project is a mini web application. The goal is to vote for the cutest cat from a set of photos and view the scores of each cat. The data used is sourced from the JSON file provided by l'atelier: [https://data.latelier.co/cats.json](https://data.latelier.co/cats.json).

## Features

- **Voting page**: Choose the cutest cat between two photos.
- **Scores page**: View all the cats with their cumulative scores.

## Technologies Used

- **Framework**: Vue.js with Vuetify for layout.
- **Language**: TypeScript for better type management and code robustness.
- **Data**: Cat data fetched from an external JSON file.

## Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (version >= 14.0.0).

## Installation and Running the Project

1. Clone the GitHub repository:

\```bash
git clone https://github.com/your-github-account/repo-name.git
cd repo-name
\```

2. Install the required dependencies:

\```bash
npm install
\```

3. Run the local server:

\```bash
npm run serve
\```

4. Open your browser and navigate to the following address:

\```
http://localhost:8080
\```

## Project Structure

The project is organized to separate components and views for easier maintenance.

- **components/**
  - `chooseCat.vue`: Component that displays two cats to vote on.
  - `ResultCat.vue`: Component that displays the voting results.
  
- **views/**
  - `HomeView.vue`: Home page where users can vote for the cutest cat.
  - `ScoresView.vue`: Scores page where all cats and their results are shown.

## Hosting

The application is hosted on https://kitkatt.netlify.app.

## Code Conventions

Special attention has been given to:

- Code structure.
- File organization.
- Naming conventions for variables and methods.
- Commit messages (clear and descriptive).

## About

This project was developed as part of a technical exercise. While not fully complete, it offers a solid foundation to evolve into a fully functional application.

