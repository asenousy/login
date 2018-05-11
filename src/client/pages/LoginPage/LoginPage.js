import React from 'react'
import './LoginPage.css'
import LoginCard from '../../components/LoginCard/LoginCard'

class LoginPage extends React.Component {
  render () {
    return <div styleName='wrapper'>
      {this.props.location.state ? <div className='alert alert-danger'>Sorry you need to log in first</div> : null}
        <LoginCard />
    </div>
  }
}

export default LoginPage
