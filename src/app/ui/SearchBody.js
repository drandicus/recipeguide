import React from 'react';
import { Section, Box, Container, Columns } from 'react-bulma-components';
import SearchTile from "./SearchTile"

function SearchBody(props) {
  console.log(props.searchData)
  return (
    <Section>
      <Container>
        <Box>
          <Columns className="is-multiline is-mobile">
            {
              props.searchData.map((data, index) => (
                <SearchTile
                  key={index}
                  picture={data.recipe.image}
                  title={data.recipe.label}
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
