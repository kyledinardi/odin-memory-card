import logo from '../img/sonic-logo.svg';

export default function Header({ highScore, currentScore }) {
  return (
    <header>
      <div className='top'>
        <h1 className='title'>
          <img src={logo} alt='Sonic the Hegehog logo' />
          <span className='title-text'>Memory game</span>
        </h1>
        <div className='scoreboard'>
          <p>High Score: {highScore}</p>
          <p>Current Score: {currentScore}</p>
        </div>
      </div>
      <p className='instructions'>Click on each character once.</p>
    </header>
  );
}
