import React, { Component } from 'react';

export default class SearchForm extends Component {

    state = {
        title: '',
        authors: '',
        printType: 'all'
    }

    onSubmitSearch = e => {
        e.preventDefault()
        this.props.searchBooks(this.state.title, this.state.authors, this.state.printType)
    }

    onChangeInput = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={ this.onSubmitSearch }>
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChangeInput}/>
                <input 
                    type="text" 
                    placeholder="Author"
                    name="authors"
                    value={this.state.authors}
                    onChange={this.onChangeInput}/>
                <div onChange={this.onChangeInput}>
                <input 
                    type="radio"
                    name="printType"
                    value="all"/> All
                <input 
                    type="radio"
                    name="printType"
                    value="magazines"/> Magazines
                <input 
                    type="radio"
                    name="printType"
                    value="books"/> Books
                </div>
                <button type="submit" onSubmit={this.onSubmitSearch}>
                    Search
                </button>
            </form>
        )
    }
}