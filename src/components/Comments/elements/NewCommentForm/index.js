import React, { Component } from 'react'
// import PropTypes from 'prop-types'

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
      </form>
    )
  }
}

// NewCommentForm.propTypes = {

// }

export default NewCommentForm
