import React from 'react';
import { Section, Box, Container, Columns } from 'react-bulma-components';
import SearchTile from "./SearchTile"

function SearchBody(props) {
  return (
    <Section>
      <Container>
        <Box className="search-body-box">
          <Columns className="is-mobile">
            {
              props.searchData.map((data, index) => (
                <SearchTile
                  key={index}
                  picture={data.recipe.image}
                  title={data.recipe.label}
                  onClick={props.onClick}
                  index={index}
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
