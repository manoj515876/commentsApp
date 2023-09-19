import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      isLike: false,
    }
    this.setState(preState => ({
      commentsList: [...preState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onLiked = id => {
    this.setState(preState => ({
      commentsList: preState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onClickDelete = id => {
    const {commentsList} = this.state
    const filterComments = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filterComments})
  }

  render() {
    const {commentsList, comment, name} = this.state
    return (
      <div className="container">
        <h1 className="heading">Comments</h1>
        <div className="card">
          <form className="form-card" onSubmit={this.onAddComment}>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="input-name"
              onChange={this.onChangeName}
              value={name}
            />
            <textarea
              placeholder="Your Comment"
              className="input-comment"
              onChange={this.onChangeComment}
              value={comment}
            />
            <button type="submit" className="btn">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-img"
          />
        </div>
        <hr className="line-break" />
        <div className="last-card">
          <div className="comments-card">
            <p className="comments-count">{commentsList.length}</p>
            <p className="para-comment">Comments</p>
          </div>
          <ul className="list-container">
            {commentsList.map(each => (
              <CommentItem
                commentDetails={each}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
                key={each.id}
                onLiked={this.onLiked}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
