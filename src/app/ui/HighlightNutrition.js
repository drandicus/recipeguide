import React from 'react';
import { Heading, Table, Columns } from 'react-bulma-components';

class HighlightNutrition extends React.Component {

  supportedUnits = ["mg", "g", "kcal", "%"];

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
                <input type="radio" name="nutritionQuantity" onClick={() => this.toggle(false)} defaultChecked/>
                Total
              </label>
            </div>
          </Columns.Column>
          <Columns.Column size={12} >
            <Table>
              <thead>
                <tr>
                  <th>Mineral</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.entries(this.state.nutritionData).map((keyVal, index) => {
                    var data = keyVal[1];
                    if (this.supportedUnits.includes(data.unit)) {
                      return (
                        <tr key={index}>
                          <td>{data.label}</td>
                          <td>{data.quantity.toFixed(2).toString() + " " + data.unit}</td>
                        </tr>
                      )
                    }             
                  })
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