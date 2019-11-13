import React from 'react';
import './App.css';
import Body from "./ui/Body"
import { Footer } from 'react-bulma-components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: null,
      searchTerm: null,
      searchResults: []
    };
  }
  
  returnHome = () => {
    this.setState({
      highlight: null,
      searchTerm: null,
      searchResults: []
    })
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
      highlight: this.state.searchResults[key],
      searchTerm: this.state.searchTerm,
      searchResults: []
    })
  }

  render() {
    return (
      <React.Fragment>
        <Body 
          highlight={this.state.highlight}
          searchTerm={this.state.searchTerm}
          searchResults={this.state.searchResults}
          handleSearchChange={this.handleSearchChange}
          handleSearchSelection={this.handleSearchSelection}
          search={this.search}
          searchChange={this.searchChange}
          returnHome={this.returnHome}
        />
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
