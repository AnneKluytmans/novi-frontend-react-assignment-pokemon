# <img src="src/assets/pikachu.png" alt="Pikachu" width="45"/> Pokémon Catalogus – NOVI Frontend Module

This repository contains my solution for the Pokémon Catalog assignment from the Frontend Development module at [Novi University](https://www.novi.nl).  
The goal of this project is to practice data fetching, state management, pagination, and component-based design by building a functional Pokémon catalog using the [PokéAPI](https://pokeapi.co/)


---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Preview](#preview)
- [Project Setup](#project-setup)
- [Credits](#credits)
- [License](#license)

---

## Tech Stack

- **React** (v18.2.0)
- **Vite**
- **Axios** (for API requests)
- **HTML5**
- **CSS3**
- **JavaScript ES6+**
- **Node.js** & **NPM**

---

## Key Features

### <img src="src/assets/pikachu.png" alt="Pikachu" width="25"/> Pokémon Catalog
- Fetches Pokémon data from the PokéAPI. 
- Displays 20 Pokémon at a time, starting from the beginning of the Pokédex. 
- Each Pokémon card includes: Name - Official artwork - Number of moves - Weight - List of abilities

### ⏭ Pagination
- Two navigation buttons: Previous and Next. 
- Users can browse through the Pokémon catalog in increments of 20. 
- Buttons are disabled when the start or end of the Pokédex is reached.

### 🔄 Loading & Error Handling
- Displays a loading state while data is being fetched. 
- Shows an error message if the request fails. 
- Prevents memory leaks when navigating quickly or cancelling requests.


---

## Preview

![Demo Pokemon Fetcher](src/assets/screenshot.gif)

> This demo shows the Pokémon Catalog App in action. At the top, users can see the navigation buttons. Below, all Pokémon are displayed with their name, artwork, abilities, weight, and number of moves.


---

## Project Setup

1. Clone or open the repository in an IDE

2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open your browser at http://localhost:5173 to view the app.


## Credits

> This assignment, visual designs and base project setup were created and provided by **Novi University** as part of the Frontend module.
> Pokémon data is fetched from the [PokéAPI](https://pokeapi.co/)
---

## License

> "This project is for **educational purposes only**. All images, designs, and dummy content are to be used for learning and non-commercial use."

---