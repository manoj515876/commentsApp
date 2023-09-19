import './index.css'

const CommentItem = props => {
  const {
    initialContainerBackgroundClassNames,
    onClickDelete,
    onLiked,
    commentDetails,
  } = props
  const {id, comment, name, time, isLike} = commentDetails
  const initialName = name[0]
  const profileClassName =
    initialContainerBackgroundClassNames[
      Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
    ]

  const likeClassName = isLike ? 'active-like' : ''
  const activeImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickedLike = () => {
    onLiked(id)
  }

  const onDelete = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-card">
      <div className="name-card">
        <p className={`profile ${profileClassName}`}>{initialName}</p>
        <p className="profile-name">{name}</p>
        <p className="time">{time}</p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="item-container">
        <button className="item-card" type="button" onClick={onClickedLike}>
          <img src={activeImg} alt="like" className="like-img" />
          <p className={`like ${likeClassName}`}>Like</p>
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
