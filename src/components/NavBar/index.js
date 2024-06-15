import './index.css'

const NavBar = props => {
  const {isGameOver, score, topScore} = props
  return (
    <nav className="emoji-nav-bar">
      <div className="logo-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      {isGameOver ? (
        ''
      ) : (
        <div className="score-section">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
