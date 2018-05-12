import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import changeLoginStatusAction from '../../actions/changeLoginStatusAction'
// import { withRouter } from 'react-router'


export class NavBar extends React.Component {
    logInOut() {
        if (this.props.isLoggedIn) {
            return <a className="nav-item nav-link"
                onClick={() => {
                    localStorage.removeItem('token')
                    this.props.changeLoginStatus(false)
                    this.props.history.push('/')
                }}> LogOut </a>
        } else {
            return <NavLink className="nav-item nav-link" to="/login" > Login </NavLink>
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="nav-item nav-link" exact to="/"> App </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/contact"> ContactUs</NavLink>
                        <NavLink className="nav-item nav-link" to="/profile" > MyProfile </NavLink>
                        {this.logInOut()}
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeLoginStatus: changeLoginStatusAction
    }, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))