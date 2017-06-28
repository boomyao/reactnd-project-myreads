import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

export default class Bookshelf extends Component {
    state={
        currentlyReading:[],
        wantRead:[],
        read:[]
    }
    componentDidMount(){
        BooksAPI.getAll()
        .then(books=>{
            this.setState({
                read:books.filter(b=>(b.shelf==="read")),
                currentlyReading:books.filter(b=>(b.shelf==="currentlyReading")),
                wantRead:books.filter(b=>(b.shelf==="wantToRead"))
            })
        })
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <BooksGrid books={this.state.currentlyReading}/>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <BooksGrid books={this.state.wantRead}/>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <BooksGrid books={this.state.read}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}