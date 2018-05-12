import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import changeLoginStatusAction from '../../actions/changeLoginStatusAction'
import './LoginCard.css'

class LoginCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.login = this.login.bind(this)
    }

    login() {
        fetch('/auth', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.email.value, password: this.password.value })
        }).then(response => {
            if (response.status !== 200) {
                throw 'Server not happy. Status : ' + response.statusText
            }
            return response.text()
        }).then(data => {
            localStorage.token = data
            this.props.changeLoginStatus(true)
            this.props.history.push('/profile')
        }).catch(err => {
            alert('Invalid username or password ?')
            console.log('Fetch Error: ', err)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.login()
    }

    render() {
        return <div>
            <h2>Log in</h2>
            <p>use a local account to login</p>
            <div styleName='wrapper' >
                <form onSubmit={this.handleSubmit}>
                    <div styleName='container'>
                        <label> Email : </label>
                        <input type="text" name='email' placeholder='Enter Email' ref={input => this.email = input} />
                    </div>
                    <div styleName='container'>
                        <label> Password: </label>
                        <input type="password" name='password' placeholder='Enter Password' ref={input => this.password = input} />
                    </div>
                    <input styleName='login' className='btn btn-primary' type="submit" value="Log in" />
                </form>
            </div>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeLoginStatus: changeLoginStatusAction
    }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(LoginCard))
