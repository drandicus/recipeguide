import React from 'react';
import Header from './Header';
import Search from "./recipesearch/Search"

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header
          searchTerm={this.props.searchTerm}
          handleSearchChange={this.props.handleSearchChange}
          search={this.props.search}
          returnHome={this.props.returnHome}
        />
        <Search
          {...this.props} 
        />
      </React.Fragment>
    );
  }
}

export default Body;
