import React, { Component } from 'react';

export default class Book extends Component {
    render() {
        const {book} = this.props;

        return (
            <div className='Book' onClick={() => window.open(book.previewLink)}>
                <b>{book.title}</b>
                <p>{book.authors}</p>
                <p>{book.description}</p>
            </div>
        )
    }
}