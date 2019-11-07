import React from 'react';
import './App.css';
import Header from "./ui/Header";
import SearchBody from "./ui/SearchBody";
import HighlightBody from "./ui/HighlightBody";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: null,
      searchTerm: null,
      searchResults: []
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      highlight: this.state.highlight,
      searchTerm: e.target.value,
      searchResults: []
    })
  }

  search = () => {
    fetch(`/api/test`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        highlight: this.state.highlight,
        searchTerm: this.state.searchTerm,
        searchResults: data
      });
    })

    //Activate to use real API data
    // fetch(`/api/search?query=${encodeURIComponent(this.state.searchTerm)}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(state);
    //     this.setState({
    //       highlight: this.state.highlight,
    //       searchTerm: this.state.searchTerm,
    //       searchResult: data
    //     });
    //   })
  }

  handleSearchSelection = (key) => {
    this.setState({
      highlight: this.searchResult[key],
      searchTerm: this.state.searchTerm,
      searchResults: []
    })
  }

  //TODO Ask jordan for a better way of doing this
  generateBody() {
    if (this.state.highlight) {
      return (
        <HighlightBody 
          highlight={this.state.highlight}
      />
      )
    }
    
    console.log(this.state)
    if (this.state.searchTerm && this.state.searchResults.length > 0) {
      return (
        <SearchBody
          searchData={this.state.searchResults}
          onClick={this.handleSearchSelection}
        />
      );
      
    }

    return (
      <div>
        This is the nobody
      </div>
    );
  }

  render() {
    let body = this.generateBody();
    return (
      <div>
        <Header 
          searchTerm={this.state.searchTerm}
          onChange={this.handleSearchChange}
          onClick={this.search}
        />
        {body}
      </div>
    );
  }
}

export default App;
