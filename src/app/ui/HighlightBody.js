import React from 'react';
import { Section, Container, Columns, Heading } from 'react-bulma-components';
import HighlightIngredients from './HighlightIngredients';

function HighlightBody(props) {
  return (
    <React.Fragment>
      <Section>
        <Heading>{props.highlight.recipe.label}</Heading>
      </Section>
      <Section>
        <Container>
          <Columns className="is-multiline is-mobile">
            <Columns.Column size={12} >
              <div className="highlight-picture-container">
                <img src={props.highlight.recipe.image} className="highlight-picture" />
              </div>
            </Columns.Column>
            <Columns.Column size={9}>
              <HighlightIngredients
                ingredients={props.highlight.recipe.ingredients}
              />
            </Columns.Column>
            <Columns.Column size={3}>
              <Heading size={4}>Nutrition</Heading>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </React.Fragment>

  );
}

export default HighlightBody;
