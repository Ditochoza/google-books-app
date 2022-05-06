import React, { Component } from 'react';
import '../App.css';

export default class SearchForm extends Component {

    state = {
        title: '',
        authors: '',
        printType: 'all'
    }

    StyleDisabled() {
        return {

        }
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
            <div className='Form'>
                <form onSubmit={this.onSubmitSearch}>
                    <input className='Input'
                        type="text" 
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChangeInput}/>
                    <br/>
                    <input className='Input'
                        type="text" 
                        placeholder="Author"
                        name="authors"
                        value={this.state.printType === 'magazines' ? '' : this.state.authors}
                        onChange={this.onChangeInput}
                        disabled={this.state.printType === 'magazines'}/>
                    <div onChange={this.onChangeInput} className='Radio'>
                    <input
                        type="radio"
                        name="printType"
                        value="all"
                        defaultChecked/> All
                    <input 
                        type="radio"
                        name="printType"
                        value="magazines"/> Magazines
                    <input 
                        type="radio"
                        name="printType"
                        value="books"/> Books
                    </div>
                    <button type="submit" onSubmit={this.onSubmitSearch} className='Button'>
                        Search
                    </button>
                </form>
            </div>
        )
    }
}