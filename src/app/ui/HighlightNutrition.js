import React from 'react';
import { Section, Container, Columns, Heading } from 'react-bulma-components';

class HighlightNutrition extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleDaily: false
    }
  }

  toggle = (e) => {
    console.log(e);
    this.setState({
      toggleDaily: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <Heading size={4}>Nutrition</Heading>
        <div class="control">
          <label class="radio">
            <input type="radio" name="nutritionQuantity" value={true}/>
            Daily
          </label>
          <label class="radio">
            <input type="radio" name="nutritionQuantity" value={false} />
            Total
          </label>
        </div>
      </React.Fragment>
    )
  }
}

export default HighlightNutrition;