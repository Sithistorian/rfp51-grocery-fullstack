import React from 'react';
import GroceryList from './GroceryList.jsx';
import $ from 'jquery';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      groceryList: []
    }
    this.getGroceryList = this.getGroceryList.bind(this);
  }


  //Initialization
  getGroceryList () {

    $.ajax({

      url: 'http://localhost:8080/list',

      method: 'GET',

      success: (data) => {
        this.setState({
          groceryList: data
        })

      },

      errCB: (err) => {
        console.log(err);
      }
    })

  }

  componentDidMount() {
    this.getGroceryList()
  }

  render () {
    return (
      <div><GroceryList groceries={this.state.groceryList}/></div>
    )
  }
}


export default App;