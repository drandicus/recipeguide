import React from 'react';
import { Columns, Heading } from 'react-bulma-components';

function HighlightIngredients(props) {
	console.log(props.ingredients)
	return (
		<React.Fragment>
			<Heading size={4}>Ingredients</Heading>
			<Columns className="is-multiline is-mobile">
				<Columns.Column size={6}>
					<ul>
						{
							props.ingredients.slice(0, Math.ceil(props.ingredients.length / 2))
								.map((ingredient, index) => (
									<li key={index.toString()}>{ingredient.text}</li>	
								))
						}
					</ul>
				</Columns.Column>
				<Columns.Column size={6}>
				<ul>
						{
							props.ingredients.slice(Math.ceil(props.ingredients.length / 2))
								.map((ingredient, index) => (
									<li key={index.toString()}>{ingredient.text}</li>	
								))
						}
					</ul>
                </Columns.Column>
			</Columns>
		</React.Fragment>

	);
}

export default HighlightIngredients;
