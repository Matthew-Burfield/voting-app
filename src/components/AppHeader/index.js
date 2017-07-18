import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.css'

const AppHeader = ({header}) => (
  <div style={s.appHeader}>
    <h1>{header}</h1>
  </div>
)

AppHeader.propTypes = {
  header: PropTypes.string
}

export default AppHeader
