import { useState } from 'react';
import initialCharacters from '../characters';
import arrayRandomizer from '../arrayRandomizer';
import Card from './Card';

export default function CardList({incrementScore, resetScore}) {
  const [characters, setCharacters] = useState(
    arrayRandomizer(initialCharacters),
  );
  const [chosenCharacters, setChosenCharacters] = useState([]);

  function chooseCard(characterName) {
    setCharacters(arrayRandomizer(characters));

    if (!chosenCharacters.includes(characterName)) {
      setChosenCharacters([...chosenCharacters, characterName]);
      incrementScore();
    } else {
      setChosenCharacters([]);
      resetScore();
    }
  }

  return (
    <div className='cardlist'>
      {characters.map((character) => (
        <Card
          character={character}
          key={character.name}
          chooseCard={chooseCard}
        />
      ))}
    </div>
  );
}
