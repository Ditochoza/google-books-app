import React, { Component } from 'react';
import Book from './Book'

export default class Books extends Component {
    render() {
        console.log(this.props.books)
        return this.props.books === '' ? 
            <p className='BooksNotFound'>Books not found</p> :
            this.props.books.map(book => <Book  key={book.id} book={book.volumeInfo}/>)
        
    }
}