import { useState } from 'react';
import Header from './components/Header';
import CardList from './components/Cardlist';

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  function incrementScore() {
    setCurrentScore(currentScore + 1);

    if (currentScore + 1 > highScore) {
      setHighScore(highScore + 1);
    }
  }

  function resetScore() {
    setCurrentScore(0);
  }

  return (
    <>
      <Header highScore={highScore} currentScore={currentScore} />
      <CardList incrementScore={incrementScore} resetScore={resetScore}/>
    </>
  );
}

export default App;
