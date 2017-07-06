import React from 'react'
import PropTypes from 'prop-types'

const Comments = ({ comments }) => {
  if (comments.length > 0) {
    return (
      <div className='commentContainer'>
        {comments.map(comment => (
          <p key={comment.id}>{comment.comment}</p>
        ))}
      </div>
    )
  }
  return <div><p>There are no comments for this poll, yet.</p></div>
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      comment: PropTypes.string,
      creatorId: PropTypes.number
    })
  )
}

export default Comments
