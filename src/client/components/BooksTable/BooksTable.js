import React from 'react'
import PropTypes from 'prop-types'

class BooksTable extends React.Component {
    render () {
        const { maxRows, bookList } = this.props
        const list = bookList.filter(book => !book.volumeInfo.title.startsWith('ISBN'))
            .slice(0, maxRows)
            .map(({ volumeInfo }, i) => {
                if (!volumeInfo) { return null }
                const { title = '', authors = [], publisher = '' } = volumeInfo
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
}

BooksTable.propTypes = {
    maxRows: PropTypes.number,
    bookList: PropTypes.array
}

BooksTable.defaultProps = {
    maxRows: 5,
    bookList: []
}

export default BooksTable
