import React from 'react';
import './App.css';
import Header from "./ui/Header";
import SearchBody from "./ui/SearchBody";
import HighlightBody from "./ui/HighlightBody";

import generateData from "./dataproviders/Providers";

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
    var data = generateData(this.state.searchTerm)
    this.setState({
      highlight: null,
      searchTerm: this.state.searchTerm,
      searchResults: data
    })
  }

  handleSearchSelection = (data) => {
    this.setState({
      highlight: data,
      searchTerm: this.state.searchTerm,
      searchResults: []
    })
  }

  generateBody() {
    if (this.state.highlight) {
      return (
        <HighlightBody 
          highlight={this.state.highlight}
      />
      )
    }
    
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
