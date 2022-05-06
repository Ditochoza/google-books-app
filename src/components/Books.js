import React, { Component } from 'react';
import Book from './Book'

export default class Books extends Component {
    render() {
        return this.props.books !== '' ? 
            this.props.books.map(book => <Book  key={book.id} book={book.volumeInfo}/>) : 
            <p className='BooksNotFound'>Books not found</p>
        
    }
}