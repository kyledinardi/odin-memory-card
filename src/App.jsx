import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <Header highScore={highScore} currentScore={currentScore} />
    </>
  );
}

export default App;
