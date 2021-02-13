import React from 'react';
import $ from 'jquery';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      groceryList: []
    }
    this.getGroceryList = this.getGroceryList.bind(this);
  }

  getGroceryList () {
    console.log('component did trigger');

    $.ajax({

      url: 'localhost:8080/list',

      method: 'GET',

      success: (data) => {
        console.log("data", data);
        this.setState({
          groceryList: data
        })

      },

      errCB: (err) => {
        console.log(err);
      }
    }).done((response) => {
      console.log('Respons', response)
    })

  }

  componentDidMount() {
    this.getGroceryList()
  }




  render () {
    return (
      <div>React is working great!</div>
    )
  }
}


export default App;