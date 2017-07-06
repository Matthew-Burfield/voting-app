import {
  backgroundColor,
  mainTextColor,
  mainTextHighlight
} from '../../constants'

export default {
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 50px',
    backgroundColor: backgroundColor
  },
  navLinks: {
    padding: '0 20px',
    color: mainTextColor,

    ':hover': {
      color: mainTextHighlight
    }
  }
}
