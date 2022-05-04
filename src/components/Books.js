import React, { Component } from 'react';
import Book from './Book'

export default class Books extends Component {
    render() {
        return this.props.books.map(book => <Book book={book}/>)
    }
}