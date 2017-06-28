import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

export default class SearchPage extends Component {
    state = {
        keyword: "",
        resultBooks:[]
    }
    handleSearchChange(e) {
        this.setState({ keyword: e.target.value })
    }
    handleSearchKeyPress(e){
        if(e.key==='Enter'){
            BooksAPI.search(this.state.keyword,15)
            .then(books=>{
                this.setState({resultBooks:books})
            })
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            value={this.state.keyword}
                            onChange={this.handleSearchChange.bind(this)}
                            onKeyPress={this.handleSearchKeyPress.bind(this)}
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={this.state.resultBooks}/>
                </div>
            </div>
        )
    }
}