import React from 'react';
import HighlightBody from './HighlightBody';
import SearchBody from './SearchBody';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  generateBody() {
    if (this.props.highlight) {
      return (
        <HighlightBody
          highlight={this.props.highlight}
        />
      )
    }

    if (this.props.searchTerm && this.props.searchResults.length > 0) {
      return (
        <SearchBody
          searchData={this.props.searchResults}
          onClick={this.props.handleSearchSelection}
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
    return (
      <React.Fragment>
        {
          this.generateBody()
        }
      </React.Fragment>
    );
  }
}

export default Search;
