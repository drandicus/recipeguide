import React from 'react';
import { Section, Container, Columns, Button } from 'react-bulma-components';

function Header(props) {
  return (
    <Section>
      <Container>
        <Columns>
          <Columns.Column className="is-1">
            <div className="home" 
              onClick={props.returnHome}
            />
          </Columns.Column>
          <Columns.Column className="is-9">
            <input
              className="input"
              placeholder={(props.searchTerm == null ? "Search recipe here" : props.searchTerm)}
              onChange={props.handleSearchChange}
            />
          </Columns.Column>
          <Columns.Column>
            <Button
              onClick={props.search}
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
