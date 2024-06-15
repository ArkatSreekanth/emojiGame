import './index.css'

const EmojiCard = props => {
  const {eachItem, onClickEmoji} = props

  const clickEmoji = () => {
    onClickEmoji(eachItem.id)
  }

  return (
    <li>
      <button onClick={clickEmoji} className="emoji-btn" type="button">
        <img
          className="emoji-img"
          src={eachItem.emojiUrl}
          alt={eachItem.emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiCard
