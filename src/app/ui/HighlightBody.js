import React from 'react';
import { Section, Container, Columns, Image, Heading} from 'react-bulma-components';

function HighlightBody(props) {
  return (
    <Section>
      <Container>
        <Columns className="is-multiline is-mobile">
          <Columns.Column size={12}>
            <Image src={props.highlight.picture}></Image>
          </Columns.Column>
          <Columns.Column size={12}>
            <Heading>{props.highlight.title}</Heading>
          </Columns.Column>
          <Columns.Column size={9}>
            Dance Monkey
          </Columns.Column>
          <Columns.Column size={3}>
            Dance Monkey
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
}

export default HighlightBody;
