import React, { Component } from "react";
import Book from "../Book/Book";
export default class BookList extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My Favorite Book Portal</h1>
        <Book name="Physics" />
      </div>
    );
  }
}
