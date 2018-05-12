import React from 'react'
import './ProfilePage.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addBooksAction from '../../actions/addBooksAction'
import changeLoginStatusAction from '../../actions/changeLoginStatusAction'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

class ProfilePage extends React.Component {
  constructor (props) {
    super(props)
    this.getReadingList = this.getReadingList.bind(this)
    this.maxRows = 5
  }

  diplayReadingList () {
    const list = this.props.bookList
      .filter(book => !book.volumeInfo.title.startsWith('ISBN'))
      .slice(0, this.maxRows)
      .map((book, i) => {
        const { volumeInfo: { title, authors, publisher } } = book
        return <tr key={i}>
          <td>{title}</td>
          <td>{authors.join(',')}</td>
          <td>{publisher}</td>
        </tr>
      })

    if (list.length === 0) {
      return null
    }

    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Publisher Name</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    )
  }

  getReadingList () {
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

  render () {
    return (
      <div styleName='card'>
        <h1>My User Details</h1>
        <ProfileCard />
        <button onClick={this.getReadingList} > Reading Preferences </button>
        <div styleName='books'>
          {this.diplayReadingList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    bookList: state.bookList
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addBooks: addBooksAction,
    changeLoginStatus: changeLoginStatusAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
