import React from 'react';
import BooksTable from './BooksTable';
import renderer from 'react-test-renderer';

it('renders table correctly', () => {
    const books = [{
        volumeInfo: {
            title: 'title',
            authors: ['author'],
            publisher: 'publisher'
        }
    }]

    const tree = renderer
        .create(<BooksTable maxRows={1} bookList={books} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
