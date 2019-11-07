import React from 'react';
import { Box, Columns, Tile, Image, Container } from 'react-bulma-components';

function SearchTile(props) {
  return (
    <Columns.Column size={3} kind="parent" onClick={() => props.onClick(props.index)}>
      <Tile>
        <Box>
          <Image rounded={false} src={props.picture} />
        </Box>
      </Tile>
      <Tile>
        <Container>{props.title}</Container>
      </Tile>
    </Columns.Column>
  );
}

export default SearchTile;
