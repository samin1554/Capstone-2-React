# Hangman Game - React Capstone Project

A modern implementation of the classic Hangman game built with React. Players guess programming-related words by selecting letters, with visual feedback for correct and incorrect guesses.

## Features

- 🎮 Interactive keyboard interface
- 🎯 Word selection from programming terms
- 🎨 Visual feedback for correct/incorrect guesses
- 🏆 Win/lose detection
- 🔄 Play again functionality
- 📱 Responsive design

## Technologies Used

- React
- JavaScript
- CSS
- Vite

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/samin1554/Capstone-2-React.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## How to Play

1. Click "Start Game" to begin
2. Click letters on the keyboard to guess
3. Correct guesses will reveal letters in the word
4. Incorrect guesses will be highlighted
5. Win by guessing all letters before running out of attempts
6. Click "Play Again" to start a new game

## Project Structure

```
src/
├── components/
│   ├── Display.jsx    # Word display and game status
│   ├── Grid.jsx       # Programming languages grid
│   ├── Keyboard.jsx   # Letter selection interface
│   └── Header.jsx     # Game header
├── App.jsx            # Main game logic
└── index.css          # Styling
```

## Future Improvements

- Add difficulty levels
- Implement score tracking
- Add animations
- Include sound effects
- Add more word categories

## Author

Samiul Islam

## License

This project is open source and available under the MIT License.
