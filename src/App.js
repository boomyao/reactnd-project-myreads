import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import MyReads from './MyReads'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={MyReads} />
          <Route path="/search" component={SearchPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
