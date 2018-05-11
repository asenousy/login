import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Routes = (routesProps) => {
  const ProtectedRoute = ({ component: Component, path }) => (
    <Route {...path} render={props => routesProps.isLoggedIn ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
  )

  return (
    <Switch>
      <Route exact path='/' component={() => <div className='jumbotron display-4'> Welcome to my App</div>}/>
      <Route exact path='/login' component={LoginPage} />
      <ProtectedRoute path="/profile" component={ProfilePage} />
      <Route path='/contact' component={() => <div className='jumbotron display-4'> Contact Us on 123456</div>} />
      <Route component={() => <h1>Sorry No Such Page</h1>} />
    </Switch>
  )
}

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
export default withRouter(connect(mapStateToProps)(Routes))
