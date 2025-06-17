import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

function App() {
  // What we need to keep track of during the game
  // --------------------------------------------
  // Remember all the letters the player has tried to guess
  const [chosenLetters, setChosenLetters] = useState([]);
  
  // Count how many times the player guessed wrong
  const [wrongGuesses, setWrongGuesses] = useState(0);
  
  // The secret word that the player needs to guess
  const [currentWord, setCurrentWord] = useState('');
  
  // Is the game still going, or did they win or lose?
  const [gameStatus, setGameStatus] = useState("playing");
  
  // How many wrong guesses are allowed before losing
  const maxWrongGuesses = 6;

  // What happens when the player does something
  // -----------------------------------------
  // Start a new game by clearing everything
  const startNewGame = useCallback(() => {
    setChosenLetters([]);        // Forget all the letters they guessed
    setWrongGuesses(0);          // Start with zero wrong guesses
    setCurrentWord('');          // Pick a new secret word
    setGameStatus("playing");    // Let them play again
  }, []);

  // When the player clicks a letter button
  const handleLetterSelect = useCallback((letter) => {
    // If the game is over, don't let them guess more
    if (gameStatus !== "playing") return;
    
    // Don't let them guess the same letter twice
    if (chosenLetters.includes(letter)) return;
    
    // Remember that they tried this letter
    setChosenLetters(prev => [...prev, letter]);
    
    // If the letter isn't in the word, count it as a wrong guess
    if (!currentWord.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  }, [gameStatus, chosenLetters, currentWord]);

  // Check if the player won or lost
  const checkGameStatus = useCallback(() => {
    // Don't check if we don't have a word yet
    if (!currentWord) return;

    // They win if they guessed all the letters in the word
    const hasWon = currentWord
      .split('')
      .every(letter => chosenLetters.includes(letter));
    
    // They lose if they made too many wrong guesses
    const hasLost = wrongGuesses >= maxWrongGuesses;

    // Tell the game if they won or lost
    if (hasWon) setGameStatus("won");
    if (hasLost) setGameStatus("lost");
  }, [currentWord, chosenLetters, wrongGuesses]);

  // Keep checking the game status whenever something important changes
  useEffect(() => {
    checkGameStatus();
  }, [checkGameStatus]);

  // What the player sees on screen
  // ----------------------------
  return (
    <div className="App">
      <Header />
      <Grid />
      {/* Shows the word with blanks for letters not guessed yet */}
      <Display 
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        chosenLetters={chosenLetters}
        gameStatus={gameStatus}
        onNewGame={startNewGame}
      />
      {/* Shows all the letter buttons they can click to guess */}
      <Keyboard 
        onLetterSelect={handleLetterSelect}
        chosenLetters={chosenLetters}
        gameStatus={gameStatus}
        currentWord={currentWord}
      />
    </div>
  );
}

export default App;
