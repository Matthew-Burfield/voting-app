import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { saveComment } from '../../../../redux/actionCreators'

class NewCommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commentValue: ''
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnTextChange = this.handleOnTextChange.bind(this)
  }

  handleOnSubmit (e) {
    e.preventDefault()
    this.setState({
      commentValue: ''
    })
    this.props.saveComment(this.props.userId, this.state.commentValue)
  }

  handleOnTextChange (e) {
    this.setState({
      commentValue: e.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <textarea
          placeholder='Add a comment to this poll'
          value={this.state.commentValue}
          onChange={this.handleOnTextChange}
          autoFocus={false}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

NewCommentForm.propTypes = {
  saveComment: PropTypes.func,
  userId: PropTypes.string
}

const mapDispatchToProps = (dispatch) => ({
  saveComment (userId, commentValue) {
    dispatch(saveComment(userId, commentValue))
  }
})

const mapStateToProps = (state) => ({
  userId: state.user.id
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentForm)
