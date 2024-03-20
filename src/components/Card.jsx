export default function Card({ character, chooseCard }) {
  return (
    <button className='card' onClick={() => chooseCard(character.name)}>
      <img src={character.image} alt='' />
      <p className='character-name'>{character.name}</p>
    </button>
  );
}
