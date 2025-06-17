import React from "react";

// This is the keyboard part of the hangman game
// It shows all the letters the player can click to guess
export default function Keyboard(props) {
    // List of all letters from A to Z for the keyboard
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    // Get the things we need from the main game:
    // - onLetterSelect: what happens when a letter is clicked
    // - chosenLetters: which letters the player has already tried
    // - currentWord: the word they're trying to guess
    const { onLetterSelect, chosenLetters, currentWord } = props;

    // Figure out how each letter button should look:
    // - If the letter hasn't been used yet: normal look
    // - If the letter is in the word: green color
    // - If the letter isn't in the word: red color
    function getButtonClass(letter) {
        if (!chosenLetters.includes(letter)) return '';
        return currentWord.includes(letter) ? 'correct' : 'incorrect';
    }
    
    return (
        <div className="keyboard-container">
            {/* Make a button for each letter of the alphabet */}
            {alphabet.map((letter) => (
                <button 
                    key={letter}                    // Each button needs a unique name
                    onClick={() => onLetterSelect(letter)}  // What happens when clicked
                    className={getButtonClass(letter)}      // How the button should look
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}