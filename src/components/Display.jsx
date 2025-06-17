import React from 'react';

// This component shows the word being guessed in the hangman game
// It displays underscores for unguessed letters and shows letters when guessed
export default function Display({ currentWord, chosenLetters, gameStatus, onNewGame, setCurrentWord }) {
    // List of words for the game
    const words = [
        "JAVASCRIPT",
        "PYTHON",
        "REACT",
        "NODE",
        "HTML",
        "CSS",
        "TYPESCRIPT",
        "JAVA",
        "RUBY",
        "PHP"
    ];

    // Function to select a random word
    function selectWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        setCurrentWord(words[randomIndex]);
    }

    // Function to show the word with underscores for unguessed letters
    function displayWord() {
        // If no word is selected yet, show nothing
        if (!currentWord) return '';
        
        // For each letter in the word:
        // - If it's been guessed, show the letter
        // - If not guessed, show an underscore
        return currentWord
            .split('')
            .map(letter => chosenLetters.includes(letter) ? letter : '_')
            .join(' ');
    }

    return (
        <div className="display-container">
            {/* Show start game button if no word is selected */}
            {!currentWord && (
                <button 
                    className="new-game-button"
                    onClick={selectWord}
                >
                    Start Game
                </button>
            )}

            {/* Show the word with underscores */}
            <div className="word-display">
                {displayWord()}
            </div>

            {/* Show game status messages */}
            {gameStatus === "won" && (
                <div className="game-message win">
                    You won! 🎉
                </div>
            )}
            {gameStatus === "lost" && (
                <div className="game-message lose">
                    Game Over! The word was: {currentWord}
                </div>
            )}

            {/* New Game button */}
            {(gameStatus === "won" || gameStatus === "lost") && (
                <button 
                    className="new-game-button"
                    onClick={onNewGame}
                >
                    Play Again
                </button>
            )}
        </div>
    );
}