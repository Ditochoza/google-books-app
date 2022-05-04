import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Books from './components/Books';
import axios from 'axios'; 

export default class App extends Component {

  state = {
    books: [],
    loading: false
  }

  searchBooks = (title, authors, printType) => {
    this.setState({loading: true});
    var queryString = "";
    if (title !== '') queryString = "intitle:" + title.trim().replace(" ", "+");
    if (authors !== '' && printType !== "magazines") {
        if (queryString !== '') queryString += "&&";
        queryString += "inauthor:" + authors.replace(" ", "+");
    }
    if (queryString !== '') queryString = "q=" + queryString;

    console.log(title, authors, printType)
    axios.get("https://www.googleapis.com/books/v1/volumes?" + queryString + "&printType=" + printType + "&maxResults=40")  
            .then(data => {
                if (data.data.totalItems > 0) {
                  this.setState({loading: false});
                  this.setState({books : data.data.items.map(item => item.volumeInfo)})
                } else {
                  this.setState({loading: false});
                  this.setState({books : []})
                }
            }) 
  }

  render() {
    return (
      <div className="App">
        <SearchForm searchBooks={this.searchBooks}></SearchForm>
        <Books books={this.state.books}></Books>
      </div>
    )
  }
}