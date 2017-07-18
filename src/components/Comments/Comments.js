import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import NewCommentForm from './elements/NewCommentForm'
import s from './styles.css'

const Comments = ({ comments, users }) => (
  // if (typeof comments === 'object' && comments.constructor === Array && comments.length > 0) {
  //   return (
  //     <div className='commentContainer'>
  //       {comments.map(comment => (
  //         <p key={comment.id}>{comment.comment}</p>
  //       ))}
  //     </div>
  //   )
  // }
  // return <div className='commentContainer'><p>There are no comments for this poll, yet.</p></div>
  <section>
    {comments.length > 0 &&
      <div className='commentContainer'>
        {comments.map(comment => (
          <p key={comment.id}>{comment.comment} <span style={s.span}>- {users.find(user => user.id === comment.creatorId).name}</span></p>
        ))}
      </div>
    }
    {comments.length === 0 &&
      <div className='commentContainer'><p>There are no comments for this poll, yet.</p></div>
    }
    <NewCommentForm />
  </section>
)

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      comment: PropTypes.string,
      creatorId: PropTypes.string.isRequired
    })
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  )
}

export default Radium(Comments)
