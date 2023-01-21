import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = ()=> {
    this.setState({ query:""});

  }
  handleSetQuery = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleSetQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}