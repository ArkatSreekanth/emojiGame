import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      score: 0,
      topScore: 0,
      emojisList,
      isGameOver: false,
    }
  }

  // state = {}

  onClickEmoji = id => {
    const {emojisList, score} = this.state
    const clickedEmoji = emojisList.filter(eachEmoji => eachEmoji.id === id)
    const gameStatus = score === 11
    if (clickedEmoji[0].isClicked === false) {
      const shuffledEmojis = emojisList.sort(() => Math.random() - 0.5)
      this.setState(prevState => ({
        emojisList: shuffledEmojis.map(eachItem => {
          if (eachItem.id === id) {
            return {...eachItem, isClicked: true}
          }
          return eachItem
        }),
        score: parseInt(prevState.score) + 1,
        isGameOver: gameStatus,
      }))
    } else {
      this.setState({
        isGameOver: true,
      })
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    const {emojisList} = this.props
    this.setState({
      score: 0,
      isGameOver: false,
      emojisList,
      topScore: score > topScore ? score : topScore,
    })
  }

  render() {
    const {emojisList, isGameOver, score, topScore} = this.state

    return (
      <>
        <NavBar isGameOver={isGameOver} score={score} topScore={topScore} />
        <div className="emoji-bg-container">
          {isGameOver ? (
            ''
          ) : (
            <ul className="emoji-section">
              {emojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  eachItem={eachItem}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
          <WinOrLoseCard
            isGameOver={isGameOver}
            score={score}
            playAgain={this.playAgain}
          />
        </div>
      </>
    )
  }
}

export default EmojiGame
