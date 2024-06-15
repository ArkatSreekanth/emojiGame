import './index.css'

const WinOrLoseCard = props => {
  const {isGameOver, score, playAgain} = props

  const clickPlayAgain = () => {
    playAgain()
  }

  const winOrLoseImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return isGameOver ? (
    <div className="win-or-loss-bg-container">
      <img src={winOrLoseImg} alt="win or lose" className="game-over-img" />

      <div className="stats-card">
        <h1 className="game-status">{score === 12 ? 'You Win' : 'You Lose'}</h1>
        <p className="best-score-text">
          {score === 12 ? 'Best Score' : 'Score'}
        </p>
        <p className="score-text">{score}/12</p>
        <button
          onClick={clickPlayAgain}
          className="play-again-btn"
          type="button"
        >
          Play Again
        </button>
      </div>
    </div>
  ) : (
    ''
  )
}

export default WinOrLoseCard
