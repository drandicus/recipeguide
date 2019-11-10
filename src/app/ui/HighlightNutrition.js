import React from 'react';
import { Heading, Table, Columns } from 'react-bulma-components';

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
        <Columns className="is-multiline is-mobile">
          <Columns.Column size={12}>
            <div class="control">
              <label class="radio">
                <input type="radio" name="nutritionQuantity" onClick={() => this.toggle(true)} />
                Daily
              </label>
              <label class="radio">
                <input type="radio" name="nutritionQuantity" value={() => this.toggle(false)} />
                Total
              </label>
            </div>
          </Columns.Column>
          <Columns.Column size={12} >
            <Table>
              <thead>

              </thead>
              <tbdoy>
                
              </tbdoy>
            </Table>
          </Columns.Column>
        </Columns>


      </React.Fragment>
    )
  }
}

export default HighlightNutrition;