import React, { Component } from 'react';


export class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      startPoint: '',
      destination: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            onChange={ this.handleChange }
            type="text" 
            name='startPoint' 
            value={ this.state.startPoint } 
            placeholder="Starting Location" 
          />
          <input 
            onChange={ this.handleChange }
            type="text" 
            name='destination' 
            value={ this.state.destination } 
            placeholder="Destination" 
          />
          <button type='submit'>Search</button>
        </form>   
      </div>
    )
  }
}

export default Search;
