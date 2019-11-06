import React from 'react';
import { Section, Container, Columns, Button } from 'react-bulma-components';

function Header(props) {
  return (
    <Section>
      <Container>
        <Columns>
          <Columns.Column className="is-four-fifths">
            <input
              className="input"
              placeholder={(props.searchTerm == null ? "Enter your search term here" : props.searchTerm)}
              onChange={props.onChange}
            />
          </Columns.Column>
          <Columns.Column>
            <Button
              onClick={props.onClick}
            >
              Search
            </Button>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
}
export default Header;
