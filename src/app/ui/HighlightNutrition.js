import React from 'react';
import { Heading, Table, Columns } from 'react-bulma-components';

class HighlightNutrition extends React.Component {

  supportedUnits = ["mg", "g"];

  constructor(props) {
    super(props);
    this.state = {
      nutritionData: props.nutrition
    }
  }

  toggle = (e) => {
    this.setState({
      nutritionData: (e ? this.props.daily : this.props.nutrition)
    })
  } 

  render() {
    return (
      <React.Fragment>
        <Heading size={4}>Nutrition</Heading>
        <Columns className="is-multiline is-mobile">
          <Columns.Column size={12}>
            <div className="control">
              <label className="radio">
                <input type="radio" name="nutritionQuantity" onClick={() => this.toggle(true)} />
                Daily
              </label>
              <label className="radio">
                <input type="radio" name="nutritionQuantity" onClick={() => this.toggle(false)} />
                Total
              </label>
            </div>
          </Columns.Column>
          <Columns.Column size={12} >
            <Table>
              <thead>
                {
                  this.renderNutritionTableHead()
                }
              </thead>
              <tbody>
                {
                  this.renderNutritionTableBody()
                }
              </tbody>
            </Table>
          </Columns.Column>
        </Columns>


      </React.Fragment>
    )
  }
}

export default HighlightNutrition;