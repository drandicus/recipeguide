import React from 'react';
import { Section, Box, Container, Columns } from 'react-bulma-components';
import SearchTile from "./SearchTile"

function SearchBody(props) {
  return (
    <Section>
      <Container>
        <Box>
          <Columns className="is-multiline is-mobile">
            {
              props.searchData.map((data, index) => (
                <SearchTile
                  key={index}
                  picture={data.picture}
                  title={data.title}
                  onClick={props.onClick}
                />
              ))
            }
          </Columns>
        </Box>
      </Container>
    </Section>
  );
}

export default SearchBody;
