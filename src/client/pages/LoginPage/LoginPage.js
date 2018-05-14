import React from 'react'
import './LoginPage.css'
import LoginCard from '../../components/LoginCard/LoginCard'

class LoginPage extends React.Component {
  render () {
    const { location } = this.props
    const destination = location && location.state && location.state.from && location.state.from.pathname
    return <div styleName='wrapper'>
      {destination ? <div className='alert alert-danger'>Log in first to access {destination.slice(1).toUpperCase()} page</div> : null}
      <LoginCard destination={destination} />
    </div>
  }
}

export default LoginPage
