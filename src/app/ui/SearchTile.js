import React from 'react';
import { Box, Columns, Tile, Image } from 'react-bulma-components';

function SearchTile(props) {
  return (
    <Columns.Column size={3} kind="parent" onClick={() => props.onClick(props.index)}>
      <Tile>
        <Box>
          <Image rounded={false} src={props.picture} />
          <div className="search-title-container">
            <span className="search-title">{props.title.toUpperCase()}</span>
          </div>
        </Box>
      </Tile>
    </Columns.Column>
  );
}

export default SearchTile;
