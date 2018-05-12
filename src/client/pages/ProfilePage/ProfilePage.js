import React from 'react'
import './ProfilePage.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addBooksAction from '../../actions/addBooksAction'
import changeLoginStatusAction from '../../actions/changeLoginStatusAction'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import BooksTable from '../../components/BooksTable/BooksTable'

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.getReadingList = this.getReadingList.bind(this)
  }

  getReadingList() {
    fetch('/books', {
      method: 'get',
      headers: { 'Bearer': localStorage.token }
    })
      .then(response => {
        if (response.status !== 200) {
          throw 'something wrong : ' + response.statusText
        }
        return response.json()
      })
      .then(({ items }) => {
        this.props.addBooks(items)
      }).catch(err => {
        console.log('Fetch Error: ', err)
        localStorage.removeItem('token')
        this.props.changeLoginStatus(false)
      })
  }

  render() {
    const { bookList } = this.props
    return (
      <div styleName='card'>
        <h1>My User Details</h1>
        <ProfileCard />
        <button onClick={this.getReadingList} > Reading Preferences </button>
        <div styleName='books'>
          <BooksTable maxRows={5} bookList={bookList} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bookList: state.bookList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addBooks: addBooksAction,
    changeLoginStatus: changeLoginStatusAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
