import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Books from './components/Books';
import axios from 'axios'; 

export default class App extends Component {

  state = {
    books: localStorage.getItem('books') === null ? [] : JSON.parse(localStorage.getItem('books')),
    loading: false
  }

  searchBooks = (title, authors, printType) => {
    if (navigator.onLine) {
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
                    console.log(data.data.items)
                    this.setState({loading: false});
                    this.setState({books : data.data.items})
                    localStorage.setItem('books', JSON.stringify(data.data.items))
                  } else {
                    this.setState({loading: false});
                    this.setState({books : ''})
                    localStorage.removeItem('books')
                  }
              }) 
      } else {
        alert('You cannot search without connection')
      }
  }

  render() {
    return (
      <div className="App">
        <SearchForm searchBooks={this.searchBooks} ></SearchForm>
        <Books books={this.state.books}></Books>
      </div>
    )
  }
}