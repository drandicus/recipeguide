import React from 'react';
import { Heading, Table, Columns } from 'react-bulma-components';

class HighlightNutrition extends React.Component {

  supportedDosage = ["mg", "g"];

  constructor(props) {
    super(props);
    console.log(props.daily);
    const nutritionData = this.modelNutritionData(props.daily);
    this.state = {
      isDaily: false,
      nutritionData: nutritionData
    }
  }

  modelNutritionData(rawData) {
    console.log(rawData);
    let filteredData = [];
    rawData.array.forEach(element => {
      console.log(element);
      if (element.unit in this.supportedDosage) {
        filteredData.push(element);
      }
    });
    return filteredData;
  }


  toggle = (e) => {
    this.setState({
      isDaily: e
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