import React from 'react'
import PropTypes from 'prop-types'

const Comments = ({ comments }) => {
  if (typeof comments === 'object' && comments.constructor === Array && comments.length > 0) {
    return (
      <div className='commentContainer'>
        {comments.map(comment => (
          <p key={comment.id}>{comment.comment}</p>
        ))}
      </div>
    )
  }
  return <div className='commentContainer'><p>There are no comments for this poll, yet.</p></div>
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      comment: PropTypes.string,
      creatorId: PropTypes.number.isRequired
    })
  )
}

export default Comments
